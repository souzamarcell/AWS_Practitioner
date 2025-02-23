window.questions10 = [
    {
        id: "q91",
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
        id: "q92",
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
        id: "q93",
        text: "Which of the following does NOT belong to the AWS Cloud Computing models?",
        options: [
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "Software as a Service (SaaS)",
            "Networking as a Service (NaaS)"
        ],
        correct: ["Networking as a Service (NaaS)"],
        explanation: "AWS oferece modelos de computação em nuvem como IaaS, PaaS e SaaS. NaaS não faz parte dos principais serviços da AWS."
    },
    {
        id: "q94",
        text: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
        options: [
            "S3 Intelligent-Tiering",
            "AWS Marketplace",
            "Amazon S3 Glacier Deep Archive",
            "Amazon EBS"
        ],
        correct: ["Amazon S3 Glacier Deep Archive"],
        explanation: "Amazon S3 Glacier Deep Archive é a opção de armazenamento mais econômica para retenção de longo prazo e conformidade regulatória."
    },
    {
        id: "q95",
        text: "Which service provides DNS in the AWS cloud?",
        options: [
            "Route 53",
            "AWS Config",
            "Amazon CloudFront",
            "Amazon EMR"
        ],
        correct: ["Route 53"],
        explanation: "Route 53 é o serviço de DNS altamente disponível e escalável da AWS."
    },
    {
        id: "q96",
        text: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
        options: [
            "AWS Shield",
            "AWS Config",
            "Amazon Cognito",
            "AWS WAF",
            "AWS KMS"
        ],
        correct: ["AWS Shield", "AWS WAF"],
        explanation: "AWS Shield protege contra ataques DDoS, e AWS WAF filtra e bloqueia tráfego malicioso."
    },
    {
        id: "q97",
        text: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
        options: [
            "AWS OpsWorks",
            "AWS Storage Gateway",
            "Amazon EBS volume",
            "Amazon ElastiCache"
        ],
        correct: ["Amazon ElastiCache"],
        explanation: "Amazon ElastiCache melhora o desempenho do aplicativo armazenando em cache os dados mais acessados."
    },
    {
        id: "q98",
        text: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
        options: [
            "Reserved instances",
            "Spot instances",
            "Dedicated instances",
            "On-demand instances"
        ],
        correct: ["On-demand instances"],
        explanation: "On-demand instances são ideais para cargas de trabalho de curto prazo, sem compromissos de longo prazo."
    },
    {
        id: "q99",
        text: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
        options: [
            "Reserved Instances",
            "On-demand Instances",
            "Dedicated Instances",
            "Spot Instances"
        ],
        correct: ["Spot Instances"],
        explanation: "Spot Instances são uma opção de baixo custo para cargas de trabalho que podem tolerar interrupções."
    },
    {
        id: "q100",
        text: "Which of the following can be described as a global content delivery network (CDN) service?",
        options: [
            "AWS VPN",
            "AWS Direct Connect",
            "AWS Regions",
            "Amazon CloudFront"
        ],
        correct: ["Amazon CloudFront"],
        explanation: "Amazon CloudFront é o serviço de CDN global da AWS para entrega rápida de conteúdo com baixa latência."
    }
];
