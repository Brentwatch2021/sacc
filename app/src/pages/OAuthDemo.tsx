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
<section className="bg-slate-50 border-t border-slate-200 py-12 px-6">
  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-slate-900 mb-3">
        💰 Cost & Hosting Overview
      </h2>
      <p className="text-slate-600 text-lg">
        A practical solution that keeps monthly costs extremely low while remaining scalable.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          ⚡ Cloudflare Worker
        </h3>

        <ul className="space-y-3 text-slate-700">
          <li>✅ Up to 100,000 requests per day on the free tier</li>
          <li>✅ Expected usage is well below free limits</li>
          <li>✅ Handles communication with Zoho APIs</li>
          <li>✅ Fast, secure and globally distributed</li>
          <li>✅ Paid plan available later if growth requires it</li>
        </ul>

        <div className="mt-5 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="font-semibold text-green-700">
            Estimated Cost: R0/month initially
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-xl font-semibold mb-4 text-slate-900">
          📁 Zoho WorkDrive Storage
        </h3>

        <ul className="space-y-3 text-slate-700">
          <li>✅ Stores student documents securely</li>
          <li>✅ No custom file server required</li>
          <li>✅ Integrated with the Zoho ecosystem</li>
          <li>✅ Easy document management</li>
          <li>✅ Scales as student numbers grow</li>
        </ul>

        <div className="mt-5 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-semibold text-blue-700">
            Storage handled through Zoho WorkDrive
          </p>
        </div>
      </div>

    </div>

    <div className="mt-8 bg-indigo-600 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">
        🚀 Recommended Solution
      </h3>

      <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="text-center">
          <div className="text-4xl mb-2">🌐</div>
          <p className="font-semibold">Website</p>
          <p className="text-indigo-100 text-sm">
            Student Portal
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-2">⚡</div>
          <p className="font-semibold">Cloudflare Worker</p>
          <p className="text-indigo-100 text-sm">
            Secure API Layer
          </p>
        </div>

        <div className="text-center">
          <div className="text-4xl mb-2">📁</div>
          <p className="font-semibold">Zoho WorkDrive</p>
          <p className="text-indigo-100 text-sm">
            Student Documents
          </p>
        </div>

      </div>

      <div className="bg-white/10 rounded-xl p-5">
        <p className="text-lg leading-relaxed">
          For the expected number of students and document uploads, this solution provides
          a reliable and scalable platform while keeping ongoing infrastructure costs
          extremely low. The Cloudflare Worker is expected to remain within the free tier
          for normal usage, while Zoho WorkDrive manages document storage efficiently.
        </p>
      </div>
    </div>

  </div>
</section>




        </>
      )}
    </div>
  );
}