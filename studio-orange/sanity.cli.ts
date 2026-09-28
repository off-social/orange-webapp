import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'iv7djc6i',
    dataset: 'production'
  },
  deployment: {
    appId: 'xu3jptgqd6vbq8a4qo2ud9kb',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
