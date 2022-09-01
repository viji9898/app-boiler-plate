import { Button } from "antd";
import { DynamicMetaTags } from "../utils/dynamicMetaTags";

export const LandingPage = ({ helloWorld }) => {
  return (
    <div className="App">
      <DynamicMetaTags
        ogTitle={`Stealth Mode`}
        ogDescription={
          "Starter boiler plate app includes, faunadb, netlify, ant design, axios - Stealth Mode"
        }
        ogImage={
          "https://app-viji.s3.eu-west-2.amazonaws.com/starter-app/og-image-starter-app-1200x627-01.png"
        }
        ogUrl={``}
      />
      <header className="App-header">
        <img
          src={
            "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
          }
          className="App-logo"
          alt="logo"
        />
        {/* <p>- Stealth Mode -</p> */}
        {/* {helloWorld ? (
          <p style={{ backgroundColor: "green" }}>
            <code>"{helloWorld.title}"</code>.
          </p>
        ) : (
          <p style={{ backgroundColor: "red" }}>
            "ERROR - Faunadb Not Connected"
          </p>
        )} */}

        <Button
          type="link"
          href="https://en.wikipedia.org/wiki/Stealth_mode"
          target="_blank"
          rel="noopener noreferrer"
        >
          - Stealth Mode -
        </Button>
      </header>
    </div>
  );
};
