const functions = require("firebase-functions");

// 自動バックアップ処理

// const firestore = require("@google-cloud/firestore");
// const client = new firestore.v1.FirestoreAdminClient();

// // Replace BUCKET_NAME
// const bucket = "gs://trpg-backup";

// exports.scheduledFirestoreExport = functions.pubsub
//   .schedule("30 15 * * *")
//   .onRun((context) => {
//     const projectId = process.env.GCP_PROJECT || process.env.GCLOUD_PROJECT;
//     const databaseName = client.databasePath(projectId, "(default)");

//     return client
//       .exportDocuments({
//         name: databaseName,
//         outputUriPrefix: bucket,
//         collectionIds: [],
//       })
//       .then((responses) => {
//         const response = responses[0];
//         console.log(`Operation Name: ${response["name"]}`);
//       })
//       .catch((err) => {
//         console.error(err);
//         throw new Error("Export operation failed");
//       });
//   });
