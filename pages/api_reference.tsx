import { RedocStandalone } from "redoc";

function ApiDocs() {
  return (
    <RedocStandalone
      specUrl="/openapi.yaml"
      options={{
        nativeScrollbars: true,
        theme: {
          colors: { primary: { main: "#66429C" } },
          typography: { headings: { fontWeight: "600" } },
          sidebar: {
            backgroundColor: "#fff",
            groupItems: { activeBackgroundColor: "#66429c33" },
            level1Items: {
              activeBackgroundColor: "#66429c33",
              activeTextColor: "#66429C",
            },
          },
          rightPanel: {
            backgroundColor: "#0A2540",
          },
        },
        scrollYOffset: 70,
        hideDownloadButton: true,
        // hideLoading: true,
      }}
    />
  );
}

export default ApiDocs;
