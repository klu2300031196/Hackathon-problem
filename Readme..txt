Persona and Problem Research  

User Persona:  
Mahesh is a Swiggy and Zomato food delivery partner in Bangalore. He works 8 to 10 hours per day. His average earnings are about ₹150 per hour. Weekly payout cycle is around ₹9,000 to ₹10,000. His income depends heavily on continuous availability during lunch and dinner peak hours.  

Daily Workflow and Income Cycle:  
Morning (9 AM to 12 PM): Few orders, earning about ₹400 to ₹500.  
Afternoon (12 PM to 3 PM): Lunch peak, earning about ₹600 to ₹700.  
Evening (6 PM to 10 PM): Dinner peak, earning about ₹800 to ₹1,000.  
Total daily earnings are about ₹1,800 to ₹2,200.  
Weekly earnings are about ₹9,000 to ₹10,000, paid weekly by Swiggy.  
Any disruption such as rain, curfew, or pollution directly reduces daily wages.  

Disruption Case Study 1: Heavy Rain  
Event: Monsoon rain greater than 50mm in Bangalore.  
Impact: Deliveries halted for 4 hours.  
Income Loss: 4 hours × ₹150 per hour = ₹600 lost.  
Frequency: 6 to 8 rainy days per month, leading to about ₹3,600 to ₹4,800 lost monthly.  

Disruption Case Study 2: Severe Pollution  
Event: AQI greater than 400, government restricts outdoor work.  
Impact: Rider cannot work for one full day.  
Income Loss: 9 hours × ₹150 per hour = ₹1,350 lost.  
Frequency: 2 to 3 days per month in winter, leading to about ₹2,700 to ₹4,050 lost monthly.  

Disruption Case Study 3: Sudden Curfew  
Event: Local curfew announced due to protests.  
Impact: Deliveries stopped for 6 hours.  
Income Loss: 6 hours × ₹150 per hour = ₹900 lost.  
Frequency: 1 to 2 times per month, leading to about ₹900 to ₹1,800 lost monthly.  

Summary of Findings:  
Persona is a Swiggy rider in Bangalore.  
Weekly income is about ₹9,000 to ₹10,000.  
Typical disruptions include rain, pollution, and curfews.  
Average monthly loss due to disruptions is about ₹7,200 to ₹10,650, which is 20 to 30 percent of income.  
This validates the need for weekly-priced parametric insurance to protect gig workers’ earnings.  

Problem Research:  
Gig workers such as Swiggy and Zomato delivery partners lose 20 to 30 percent of their monthly income due to uncontrollable external disruptions like heavy rain, floods, pollution, or sudden curfews. They currently have no financial safety net to protect against these losses. Our project will build an AI-powered parametric insurance platform that automatically safeguards their weekly income. The insurance will not cover health, accidents, or vehicle repairs, but will focus only on income loss caused by external disruptions.  

Development Approach:  
The platform will be designed around the weekly payout cycle of gig workers. Workers will register, create policies, and pay weekly premiums. When disruptions occur, the system will automatically trigger claims and process payouts. The platform will integrate with weather APIs, traffic data, and payment gateways to simulate real-time monitoring and instant compensation.  

AI Integration:  
1. Risk Assessment: AI models will calculate dynamic weekly premiums based on hyper-local risk factors such as weather forecasts, pollution levels, and historical disruption data.  
2. Fraud Detection: AI will detect anomalies in claims, validate location and activity data, and prevent duplicate or false claims. For example, it can check GPS data to ensure the worker was active in the affected zone.  
3. Predictive Modeling: Machine learning will forecast likely disruptions in the coming week and adjust coverage or pricing accordingly.  
4. Automation: AI will monitor real-time triggers such as rainfall, AQI, or curfew alerts and automatically initiate claims without manual intervention.  

Sample Weekly Premium Model:  
Weekly Premium: ₹50 per worker.  
Coverage: Up to ₹2,000 per week for income lost due to disruptions.  
Example: If heavy rain stops deliveries for 4 hours, the system automatically calculates the loss (₹600) and initiates payout.  
Dynamic Adjustment: Premiums may reduce by ₹5 if the worker operates in a historically safe zone, or increase by ₹10 if the worker operates in a high-risk flood-prone area.  

Parametric Triggers:  
Rainfall greater than 50mm in a day → automatic claim initiation.  
AQI greater than 400 → payout for one day’s lost wages.  
Government curfew announcement → payout for hours lost during curfew.  

Platform Choice:  
We will build a mobile-first platform since delivery partners primarily use smartphones during work. A web dashboard may be added later for insurers and administrators.  

Tech Stack Outline:  
Backend: Java with Spring Boot.  
Frontend: Flutter for mobile application.  
Database: PostgreSQL.  
AI/ML: Python with scikit-learn and TensorFlow.  
Integrations: Weather API, AQI API, Traffic data, Razorpay sandbox for payments. 

Summary:  
The project will combine AI-powered risk assessment, fraud detection, and parametric automation to create a weekly-priced insurance platform. This ensures gig workers are protected against income loss due to uncontrollable external disruptions, while maintaining a simple and transparent user experience.
