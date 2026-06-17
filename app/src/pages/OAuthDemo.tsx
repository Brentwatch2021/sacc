const CLIENT_ID = "1000.II7QT9C3A6FRJ67GS35IHBZF57ZRNO";
const REDIRECT_URI = "https://studentportalsolar.netlify.app/oauth-demo";

const SCOPES = [
  "ZohoVertical.modules.ALL",
  "ZohoVertical.settings.ALL",
  "WorkDrive.files.ALL",
  "WorkDrive.team.READ"
].join(",");

export default function OAuthDemo() {
  const loginUrl =
    `https://accounts.zoho.com/oauth/v2/auth` +
    `?scope=${encodeURIComponent(SCOPES)}` +
    `&client_id=${CLIENT_ID}` +
    `&response_type=token` +
    `&access_type=online` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

  const hash = window.location.hash;
  const params = new URLSearchParams(hash.replace("#", ""));
  const accessToken = params.get("access_token");
  const expiresIn = params.get("expires_in");

  async function testZohoCall() {
    const res = await fetch("https://www.zohoapis.com/crm/v6/Contacts", {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`
      }
    });

    const data = await res.json();
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Client OAuth Demo - Expected to Break</h1>

      <p>
        This page demonstrates why browser-side Zoho OAuth is not suitable
        for the public website.
      </p>

      {!accessToken && (
        <a href={loginUrl}>
          Login directly with Zoho
        </a>
      )}

      {accessToken && (
        <>
          <h3>Access Token Visible in Browser</h3>
          <textarea
            value={accessToken}
            readOnly
            style={{ width: "100%", height: 120 }}
          />

          <p>Expires in: {expiresIn} seconds</p>

          <button onClick={testZohoCall}>
            Test Zoho API Call
          </button>
        </>
      )}
    </div>
  );
}