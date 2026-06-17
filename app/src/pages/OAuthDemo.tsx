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
    <div style={{ padding: 40, margin: "0 auto", maxWidth: 800 }}>
      <h1>Client OAuth Demo - Expected to Break</h1>

      <p>
        This page demonstrates why browser-side Zoho OAuth is not suitable
        for the public website.
      </p>

      {!accessToken && (
        <a href={loginUrl} className="btn-primary padding-40">
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

            ```tsx
<section className="max-w-5xl mx-auto my-10 p-8 rounded-3xl bg-orange-50 border-2 border-orange-200 text-gray-800">

  <h1 className="text-4xl font-bold text-orange-700 mb-4">
    ⚠️ Why Direct Zoho Login Does Not Work for a Public Website
  </h1>

  <p className="text-lg leading-relaxed">
    The goal is simple: a visitor should open the website and immediately see the available classes.
  </p>

  <div className="grid gap-5 mt-8">

    <div className="bg-white p-5 rounded-2xl border-l-8 border-red-600 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">
        👤 Every visitor would need a Zoho account
      </h2>
      <p>
        If someone wants to view classes, they would first need to log in with Zoho.
        Most public visitors and potential students do not have Zoho accounts.
      </p>
    </div>

    <div className="bg-white p-5 rounded-2xl border-l-8 border-red-600 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">
        🚪 People will leave before seeing the classes
      </h2>
      <p>
        A visitor expecting course information will instead see a login and permission screen.
        That creates friction and loses enquiries.
      </p>
    </div>

    <div className="bg-white p-5 rounded-2xl border-l-8 border-red-600 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">
        🔐 Even ignoring security, it is not practical
      </h2>
      <p>
        The public website would depend on every visitor having access to Zoho.
        That is not how a public training website should operate.
      </p>
    </div>

    <div className="bg-white p-5 rounded-2xl border-l-8 border-red-600 shadow-sm">
      <h2 className="text-2xl font-semibold mb-2">
        ⏳ Access eventually expires
      </h2>
      <p>
        Users may need to log in repeatedly just to browse classes and programmes.
      </p>
    </div>

  </div>

  <div className="mt-8 p-6 rounded-3xl bg-green-50 border-2 border-green-300">
    <h2 className="text-3xl font-bold text-green-700 mb-4">
      ✅ What Is Actually Needed
    </h2>

    <p className="text-lg mb-6">
      Visitors should never connect directly to Zoho.
    </p>

    <div className="text-center text-xl font-bold py-4">
      Visitor → Website → Cloudflare Worker / Backend → Zoho → Classes Displayed
    </div>

    <p>
      This allows anyone to instantly view classes without creating a Zoho account,
      logging in, or leaving the website.
    </p>
  </div>

  <div className="mt-8 p-6 rounded-3xl bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-3">
      💰 Bottom Line
    </h2>

    <p className="text-xl">
      The Cloudflare Worker is not an extra luxury cost.
      It is the component that makes a public website function correctly.
    </p>

    <p className="mt-4 text-lg text-gray-300">
      Without it, every visitor would need a Zoho account before they can even see the available classes.
    </p>
  </div>

</section>
```




        </>
      )}
    </div>
  );
}