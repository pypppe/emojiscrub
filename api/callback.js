export default async function handler(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.redirect('/?error=no_code');
  }

  const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: 'https://escrub.astrarune.com/api/callback',
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return res.redirect('/?error=token_failed');
  }

  const userRes = await fetch('https://discord.com/api/users/@me', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` },
  });

  const user = await userRes.json();

  const avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;

  res.redirect(`/accounts?discord_id=${user.id}&username=${encodeURIComponent(user.username)}&avatar=${encodeURIComponent(avatar)}`);
}
