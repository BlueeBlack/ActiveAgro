import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
    api: {
        projectId: "8m0swnfc",
        dataset: "production",
    },
    // Hosted at https://activeagro.sanity.studio (deploy with `npm run studio:deploy`)
    deployment: {
        appId: "ye7galjnxwudreiaqpa1bn19",
    },
});
