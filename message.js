import notificationapi from 'notificationapi-node-server-sdk'
// const notificationapi = require('notificationapi-node-server-sdk').default

notificationapi.init(
    'c8f39eg0cgce7p3qshh1v09kd', // clientId
    '1f1lud3ned69c6j4p6hh4lsao19rlv975vfklj1epdc415lcvsr6'// clientSecret
)

const sendNotification = () => {
    notificationapi.send({
        notificationId: 'result',
        user: {
            id: "whoabhaysharma@gmail.com",
            email: "whoabhaysharma@gmail.com",
            number: "+917210089184" // Replace with your phone number
        },
        mergeTags: {
            "comment": "testComment",
            "commentId": "testCommentId"
        }
    })
}

export {
    sendNotification
}