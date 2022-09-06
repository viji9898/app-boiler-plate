import { Button, Col, Row } from "antd";

export const Hero = ({ helloWorld }) => {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        background: "rgb(225, 225, 219)",
        maxWidth: "1200px",
      }}
    >
      <Col xs={24} sm={24} md={12} style={{ textAlign: "center" }}>
        <Row justify="center">
          <Col span={24}>
            <p>Boiler Plate App</p>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={6}>
            <p>Boiler Plate App</p>
            <Button>Developer Docs</Button>
          </Col>
          <Col span={6}>
            <p>Boiler Plate App</p>
            <Button
              href="https://github.com/viji9898/app-boiler-plate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </Col>
        </Row>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <div
          style={{
            // background: "rgb(225, 225, 219)",
            margin: "40px",
            textAlign: "center",
          }}
        >
          <img
            src={
              "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
            }
            className="App-logo"
            alt="logo"
          />
        </div>
      </Col>
      <Col span={24}>
        {helloWorld ? (
          <div style={{ textAlign: "center" }}>
            <p style={{ backgroundColor: "lime" }}>
              <code>"{helloWorld.title}"</code>.
            </p>
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p style={{ backgroundColor: "red" }}>
              "ERROR - Faunadb Not Connected"
            </p>
          </div>
        )}
      </Col>
    </Row>
  );
};
