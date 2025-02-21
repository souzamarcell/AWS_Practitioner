window.questions4 = [
    {
        id: "q31",
        text: "Which of the following will affect how much you are charged for storing objects in S3? Choose the 2 Correct answers:",
        options: [
            "The storage class used for the objects stored.",
            "Encrypting data (objects) stored in S3.",
            "Creating and deleting S3 buckets",
            "The total size in gigabytes of all objects stored"
        ],
        correct: ["The storage class used for the objects stored.", "The total size in gigabytes of all objects stored"],
        multiple: true
    },
    {
        id: "q32",
        text: "What endpoints are possible to send messages to with Simple Notification Service? (Select all that apply) Choose the 3 Correct answers:",
        options: [
            "SMS",
            "FTP",
            "SQS",
            "Lambda"
        ],
        correct: ["SMS", "SQS", "Lambda"],
        multiple: true
    },
    {
        id: "q33",
        text: "What does S3 stand for?",
        options: [
            "Simple Storage Service",
            "Simplified Storage Service",
            "Simple Store Service",
            "Service for Simple Storage"
        ],
        correct: ["Simple Storage Service"]
    },
    {
        id: "q34",
        text: "What AWS storage class should be used for long-term, archival storage?",
        options: [
            "Glacier",
            "Long-Term",
            "Standard",
            "Infrequent Access"
        ],
        correct: ["Glacier"],
        explanation: "Glacier should be used for (and is specifically designed for) long-term, archival storage."
    },
    {
        id: "q35",
        text: "Kim is managing a web application running on the AWS cloud. The application is currently utilizing eight EC2 servers for its compute platform. Earlier today, two of those web servers crashed; however, none of her customers were affected. What has Kim done correctly in this scenario?",
        options: [
            "Properly built an elastic system.",
            "Properly built a scalable system.",
            "Properly built a fault-tolerant system.",
            "None of the above"
        ],
        correct: ["Properly built a fault-tolerant system."],
        explanation: "A fault-tolerant system is one that can sustain a certain amount of failure while still remaining operational."
    },
    {
        id: "q36",
        text: "Why would a company decide to use AWS over an on-premises data center? (Select all that apply) Choose the 4 Correct answers:",
        options: [
            "Highly available infrastructure",
            "Elastic resources based on demand",
            "No upfront cost",
            "Cost-effective"
        ],
        correct: [
            "Highly available infrastructure",
            "Elastic resources based on demand",
            "No upfront cost",
            "Cost-effective"
        ],
        multiple: true,
        explanation: "All four answers listed are reasons why a company may decide to use AWS over an on-premises data center."
    },
    {
        id: "q37",
        text: "S3 storage classes are rated by what two metric categories? (Select two) Choose the 2 Correct answers:",
        options: [
            "Objectivity",
            "Durability",
            "Availability",
            "Fault tolerance"
        ],
        correct: ["Durability", "Availability"],
        multiple: true,
        explanation: "Each S3 storage class is rated on its availability and durability."
    },
    {
        id: "q38",
        text: "You have been tasked by your department head to upload a batch of files to an S3 bucket; however, when you select S3 on the AWS console, you see a notification stating that you do not have permission to access S3. What is the most probable cause of this error?",
        options: [
            "It takes 24 hours to get access to S3.",
            "The S3 service is currently down for maintenance.",
            "You do not have an S3 access policy attached to your IAM user.",
            "Your boss has not enabled proper bucket permission."
        ],
        correct: ["You do not have an S3 access policy attached to your IAM user."],
        explanation: "If you get an error stating that you do not have proper permissions to access/use an AWS service, then most likely your IAM user does not have the proper permission policy attached."
    },
    {
        id: "q39",
        text: "What are the benefits of AWS's Relational Database Service (RDS)? (Select all that apply) Choose the 3 Correct answers:",
        options: [
            "Resizable capacity",
            "Automated patches and backups",
            "Cost-efficient",
            "None of the above"
        ],
        correct: ["Resizable capacity", "Automated patches and backups", "Cost-efficient"],
        multiple: true
    },
    {
        id: "q40",
        text: "What acts as an address (like a mailing address) for a web server located on a network?",
        options: [
            "DNS Server",
            "IP Address",
            "Common language domain name",
            "None of the above"
        ],
        correct: ["IP Address"],
        explanation: "An IP address is a server's address on a network. It is how traffic/requests get routed to it (much like a piece of mail gets routed to your home)."
    }
  ];
  