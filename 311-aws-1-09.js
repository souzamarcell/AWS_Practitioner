window.questions09 = [
    {
        id: "q81",
        text: "What does Amazon CloudFront use to distribute content to global users with low latency?",
        options: [
            "AWS Global Accelerator",
            "AWS Regions",
            "AWS Edge Locations",
            "AWS Availability Zones"
        ],
        correct: ["AWS Edge Locations"],
        explanation: "Amazon CloudFront uses AWS Edge Locations to cache and deliver content closer to users, reducing latency."
    },
    {
        id: "q82",
        text: "What does the 'Principle of Least Privilege' refer to?",
        options: [
            "You should grant your users only the permissions they need when they need them and nothing more.",
            "All IAM users should have at least the necessary permissions to access the core AWS services.",
            "All trusted IAM users should have access to any AWS service in the respective AWS account.",
            "IAM users should not be granted any permissions; to keep your account safe."
        ],
        correct: ["You should grant your users only the permissions they need when they need them and nothing more."],
        explanation: "The Principle of Least Privilege ensures that users only get the minimum permissions necessary to perform their tasks."
    },
    {
        id: "q83",
        text: "Which of the following does NOT belong to the AWS Cloud Computing models?",
        options: [
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "Software as a Service (SaaS)",
            "Networking as a Service (NaaS)"
        ],
        correct: ["Networking as a Service (NaaS)"],
        explanation: "AWS primarily offers IaaS, PaaS e SaaS. NaaS is not a core AWS cloud computing model."
    },
    {
        id: "q84",
        text: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
        options: [
            "S3 Intelligent-Tiering",
            "AWS Marketplace",
            "Amazon S3 Glacier Deep Archive",
            "Amazon EBS"
        ],
        correct: ["Amazon S3 Glacier Deep Archive"],
        explanation: "Amazon S3 Glacier Deep Archive provides the lowest-cost long-term storage option, making it ideal for compliance and legal purposes."
    },
    {
        id: "q85",
        text: "Which service provides DNS in the AWS cloud?",
        options: [
            "Route 53",
            "AWS Config",
            "Amazon CloudFront",
            "Amazon EMR"
        ],
        correct: ["Route 53"],
        explanation: "Route 53 is AWS's scalable Domain Name System (DNS) service."
    },
    {
        id: "q86",
        text: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
        options: [
            "AWS Shield",
            "AWS Config",
            "Amazon Cognito",
            "AWS WAF",
            "AWS KMS"
        ],
        correct: ["AWS Shield", "AWS WAF"],
        explanation: "AWS Shield provides DDoS protection, and AWS WAF helps filter and block malicious traffic."
    },
    {
        id: "q87",
        text: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
        options: [
            "AWS OpsWorks",
            "AWS Storage Gateway",
            "Amazon EBS volume",
            "Amazon ElastiCache"
        ],
        correct: ["Amazon ElastiCache"],
        explanation: "Amazon ElastiCache improves application performance by caching frequently accessed data."
    },
    {
        id: "q88",
        text: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
        options: [
            "Reserved instances",
            "Spot instances",
            "Dedicated instances",
            "On-demand instances"
        ],
        correct: ["On-demand instances"],
        explanation: "On-demand instances are ideal for short-term, uninterrupted workloads without long-term commitments."
    },
    {
        id: "q89",
        text: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
        options: [
            "Reserved Instances",
            "On-demand Instances",
            "Dedicated Instances",
            "Spot Instances"
        ],
        correct: ["Spot Instances"],
        explanation: "Spot Instances provide a cost-effective solution for workloads that can handle interruptions."
    },
    {
        id: "q90",
        text: "Which of the following can be described as a global content delivery network (CDN) service?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "AWS Regions",
            "Amazon CloudFront"
        ],
        correct: ["Amazon CloudFront"],
        explanation: "Amazon CloudFront is AWS's global content delivery network (CDN) for distributing content with low latency."
    }
];
