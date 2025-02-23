window.questions5 = [
    {
        id: "q41",
        text: "Derek is running a web application and is noticing that he is paying for way more server capacity than is required. What AWS feature should Derek set up and configure to ensure that his application is automatically adding/removing server capacity to keep in line with the required demand?",
        options: [
            "Auto Scaling",
            "Elastic Server Scaling",
            "Elastic Load Balancing",
            "Auto Sizing"
        ],
        correct: ["Auto Scaling"],
        explanation: "Auto Scaling is the feature that automates the process of adding/removing server capacity from a system (based on usage demand). It creates a very cost-effective system by never having too much or too little server capacity."
    },
    {
        id: "q42",
        text: "What AWS service uses Edge Locations for content caching?",
        options: [
            "ElastiCache",
            "Route 53",
            "CloudFront",
            "CloudCache"
        ],
        correct: ["CloudFront"],
        explanation: "CloudFront is a content caching service provided by AWS that utilizes 'Edge Locations,' which are AWS data centers located all around the world."
    },
    {
        id: "q43",
        text: "What is the purpose of AWS's Route 53 service? (Select all that apply) Choose the 2 Correct answers:",
        options: [
            "Content Caching",
            "Database Management",
            "Domain Registration",
            "Domain Name System (DNS) service"
        ],
        correct: ["Domain Registration", "Domain Name System (DNS) service"],
        multiple: true,
        explanation: "Route 53 is AWS's domain and DNS management service. You can use it to register new domain names, as well as manage DNS record sets."
    },
    {
        id: "q44",
        text: "What are the benefits of AWS Organizations? (Select all that apply) Choose the 2 Correct answers:",
        options: [
            "Analyze cost across all multiple AWS accounts.",
            "Automate AWS account creation and management.",
            "Centrally manage access policies across multiple AWS accounts.",
            "None of the above"
        ],
        correct: ["Automate AWS account creation and management.", "Centrally manage access policies across multiple AWS accounts."],
        multiple: true,
        explanation: "AWS Organizations allows you to centrally manage access policies across multiple AWS accounts and automate account creation and management."
    },
    {
        id: "q45",
        text: "Matt is working on a project that involves converting image formats from .png to .jpg. Thousands of images have to be converted; however, time is not really an issue, and continual processing is not required. What type of EC2 buying option would be most cost-effective for Matt to use?",
        options: [
            "Spot",
            "On-demand",
            "Reserved",
            "None of the above"
        ],
        correct: ["Spot"],
        explanation: "Spot instances offer the cheapest option of all EC2's buying options. However, they should only be used when there can be interruptions in the processing jobs being conducted due to fluctuations in spot pricing."
    },
    {
        id: "q46",
        text: "Tracy has created a web application, placing its underlying infrastructure in the N. Virginia (US-East-1) region. After several months, Tracy notices that much of the traffic coming to her website is from Japan. What can Tracy do to (best) help reduce latency for her users in Japan?",
        options: [
            "Copy the current VPC and ask AWS to move it to a region closest to Japan",
            "Create and manage a complete duplicate copy of the web application and its infrastructure in a region closest to Japan.",
            "Create a CDN using CloudFront, making sure the proper content is cached at Edge Locations closest to Japan.",
            "Create a CDN using CloudCache, making sure the proper content is cached at Edge Locations closest to Japan."
        ],
        correct: ["Create a CDN using CloudFront, making sure the proper content is cached at Edge Locations closest to Japan."],
        explanation: "CloudFront is AWS's content delivery network (CDN) service. You can use it to cache web content at edge locations closest to your customers, decreasing latency and improving overall performance."
    },
    {
        id: "q47",
        text: "What are the four primary benefits of using the cloud/AWS?",
        options: [
            "Elasticity, scalability, easy access, limited storage.",
            "Fault tolerance, scalability, elasticity, and high availability.",
            "Unlimited storage, limited compute capacity, fault tolerance, and high availability.",
            "Fault tolerance, scalability, sometimes available, unlimited storage."
        ],
        correct: ["Fault tolerance, scalability, elasticity, and high availability."],
        explanation: "These are the four primary benefits of AWS/the cloud."
    },
    {
        id: "q48",
        text: "What is the purpose of a DNS server?",
        options: [
            "To serve web application content.",
            "To convert common language domain names to IP addresses.",
            "To convert IP addresses to common language domain names.",
            "To act as an internet search engine."
        ],
        correct: ["To convert common language domain names to IP addresses."],
        explanation: "DNS servers act as a 'third party' that provides the service of converting domain names to IP addresses."
    },
    {
        id: "q49",
        text: "What best describes the concept of scalability?",
        options: [
            "The ability for a system to withstand a certain amount of failure and still remain functional.",
            "The ability for a system to grow in size, capacity, and/or scope.",
            "The ability for a system to grow and shrink based on demand.",
            "The ability for a system to be accessible when you attempt to access it."
        ],
        correct: ["The ability for a system to grow in size, capacity, and/or scope."],
        explanation: "Scalability refers to the ability of a system to scale up easily and cost-effectively."
    },
    {
        id: "q50",
        text: "Mike is setting up the infrastructure for a web application that requires three EC2 instances to handle the expected demand. However, when testing the application, Mike finds that all traffic to the application is being routed to only one of the servers. What AWS feature should he add to his application in order to have traffic evenly distributed between all three servers?",
        options: [
            "Elastic Load Balancer",
            "Auto Scaling",
            "Route 53",
            "CloudFront"
        ],
        correct: ["Elastic Load Balancer"],
        explanation: "An Elastic Load Balancer is designed to evenly distribute incoming web traffic between all associated servers."
    }
  ];
  