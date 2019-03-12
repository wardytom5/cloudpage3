if (window.Cti === undefined) window.Cti = {};

Cti.adv_diploma_it = {
  classes: function() {
    var priv = {};
    var pub = {};

    priv.elemTmpl = `
      <h4 class='lesson' data-code="%code%" data-unit-name="%unit-name%" data-sub-unit-name="%sub-unit-name%">%name%</h4>
    `;

    priv.boxTmpl = `
      <div class="units dragula-container" id="%id%"><h3>%name%</h3></div>
    `;

    priv.get_json = function() {
      pub.data = {
        "code": "ICT60115",
        "name": "Advanced Diploma of Information Technology",
        "units": [
          {
            "EPC": [
              {
                "name": "Manage adherence to copyright regulations",
                "pc": [
                  {
                    "name": "Review current Australian copyright law, and in particular its relationship to information and communications technology (ICT)"
                  },
                  {
                    "name": "Ensure that team members are aware of Australian copyright law and how it affects their work"
                  },
                  {
                    "name": "Institute measures to ensure that copyright is not breached"
                  },
                  {
                    "name": "Institute regular reviews to ensure organisational copyright requirements are up to date and team members are adhering to these requirements"
                  },
                  {
                    "name": "Distribute updated versions if required"
                  }
                ]
              },
              {
                "name": "Manage ethical behaviour",
                "pc": [
                  {
                    "name": "Review appropriate code of ethics, both organisational and ICT specific"
                  },
                  {
                    "name": "Acquaint team members with ethical requirements"
                  },
                  {
                    "name": "Institute regular reviews of team members ethical work practices and feedback to ensure correct application of the code"
                  },
                  {
                    "name": "Ensure that stakeholders are aware of ethics code, and adjust appropriately following stakeholder feedback"
                  },
                  {
                    "name": "Institute regular reviews of stakeholder understanding and application of code of ethics"
                  },
                  {
                    "name": "Establish a review and grievance procedure to enable confidential reporting of ethical issues"
                  },
                  {
                    "name": "Institute regular reviews of code of ethics, updating and distributing as required"
                  }
                ]
              },
              {
                "name": "Manage privacy",
                "pc": [
                  {
                    "name": "Institute a regular review of the relevance of legislation and standards to organisational outcomes, the organisation's privacy policy and procedures, and the work practices of team members with regard to these requirements"
                  },
                  {
                    "name": "Determine and ensure the integrity, confidentiality, security and availability of information as required by the organisational policy"
                  },
                  {
                    "name": "Ensure continued confidentiality and proprietary rights of stakeholders' interests"
                  },
                  {
                    "name": "Contribute to the creation or updating of the organisation's privacy policy and procedures to align with privacy legislation"
                  },
                  {
                    "name": "Distribute new or revised policy and procedures to stakeholders"
                  },
                  {
                    "name": "Implement new work procedures and collect feedback from stakeholders"
                  }
                ]
              }
            ],
            "code": "ICTICT610",
            "name": "Manage Copyright, Ethics and Privacy in an IT Environment"
          },
          {
            "EPC": [
              {
                "name": "Design web service or cloud computing application",
                "pc": [
                  {
                    "name": "Gather requirements for the web service or cloud computing application"
                  },
                  {
                    "name": "Determine the development environment and tools required to create web service or cloud computing application"
                  },
                  {
                    "name": "Identify any possible big data applications"
                  },
                  {
                    "name": "Define architecture and framework"
                  }
                ]
              },
              {
                "name": "Build web service",
                "pc": [
                  {
                    "name": "Itemise required functionality"
                  },
                  {
                    "name": " Build web service in the determined environment to meet required functionality"
                  }
                ]
              },
              {
                "name": "Build cloud computing application",
                "pc": [
                  {
                    "name": "Determine required functionality"
                  },
                  {
                    "name": "Build cloud computing application in the determined environment to meet the required functionality"
                  }
                ]
              },
              {
                "name": "Test web service or cloud computing application",
                "pc": [
                  {
                    "name": "Test web service or cloud computing application for overall functionality according to requirements"
                  },
                  {
                    "name": "Iterate design or build until test results meet requirements"
                  }
                ]
              },
              {
                "name": "Deploy web service or cloud computing application",
                "pc": [
                  {
                    "name": "Deploy web service or cloud computing application to the specified environment"
                  },
                  {
                    "name": "Publish web service or cloud computing application to the specified environment"
                  }
                ]
              }
            ],
            "code": "ICTPRG604",
            "name": "Create cloud computing services"
          },
          {
            "EPC": [
              {
                "name": "Establish team performance plan",
                "pc": [
                  {
                    "name": "Consult team members to establish a common understanding of team purpose, roles, responsibilities and accountabilities in accordance with organisational goals, plans and objectives"
                  },
                  {
                    "name": "Develop performance plans to establish expected outcomes, outputs, key performance indicators (KPIs) and goals for work team"
                  },
                  {
                    "name": "Support team members in meeting expected performance outcomes"
                  }
                ]
              },
              {
                "name": "Develop and facilitate team cohesion",
                "pc": [
                  {
                    "name": "Develop strategies to ensure team members have input into planning, decision making and operational aspects of work team"
                  },
                  {
                    "name": "Develop policies and procedures to ensure team members take responsibility for own work and assist others to undertake required roles and responsibilities"
                  },
                  {
                    "name": "Provide feedback to team members to encourage, value and reward individual and team efforts and contributions"
                  },
                  {
                    "name": "Develop processes to ensure that issues, concerns and problems identified by team members are recognised and addressed"
                  }
                ]
              },
              {
                "name": "Facilitate teamwork",
                "pc": [
                  {
                    "name": "Encourage team members and individuals to participate in and to take responsibility for team activities, including communication processes"
                  },
                  {
                    "name": "Support the team in identifying and resolving work performance problems"
                  },
                  {
                    "name": "Ensure own contribution to work team serves as a role model for others and enhances the organisation’s image for all stakeholders"
                  }
                ]
              },
              {
                "name": "Liase with stakeholders",
                "pc": [
                  {
                    "name": "Establish and maintain open communication processes with all stakeholders"
                  },
                  {
                    "name": "Communicate information from line manager/management to the team"
                  },
                  {
                    "name": "Communicate unresolved issues, concerns and problems raised by team members and follow-up with line manager/management and other relevant stakeholders"
                  },
                  {
                    "name": "Evaluate and take necessary corrective action regarding unresolved issues, concerns and problems raised by internal or external stakeholders"
                  }
                ]
              }
            ],
            "code": "BSBWOR502",
            "name": "Lead and manage team effectiveness"
          },
          {
            "EPC": [
              {
                "name": "Review programs, systems and processes",
                "pc": [
                  {
                    "name": "Establish strategies to monitor and evaluate performance and sustainability of key systems and processes"
                  },
                  {
                    "name": "Undertake detailed analyses of supply chains, and operational, product and service delivery systems"
                  },
                  {
                    "name": "Identify performance measures, and assessment tools and techniques, and evaluate their effectiveness"
                  },
                  {
                    "name": "Analyse performance reports and variance from plans for key result areas of the organisation"
                  },
                  {
                    "name": "Identify and analyse changing trends and opportunities relevant to the organisation"
                  },
                  {
                    "name": "Seek advice from specialists, where appropriate, to identify technology and electronic commerce opportunities"
                  }
                ]
              },
              {
                "name": "Develop options for continuous improvement",
                "pc": [
                  {
                    "name": "Brief groups on performance improvement strategies and innovation as an essential element of competition"
                  },
                  {
                    "name": "Foster creative climate and organisational learning by promoting interaction within and between work groups"
                  },
                  {
                    "name": "Encourage, test and recognise new ideas and entrepreneurial behaviour where successful"
                  },
                  {
                    "name": "Accept failure of an idea during trialling and recognise, celebrate and embed success into systems"
                  },
                  {
                    "name": "Undertake risk management and cost-benefit analysis for each option or idea approved for trial"
                  },
                  {
                    "name": "Approve innovations through agreed organisational processes"
                  }
                ]
              },
              {
                "name": "Implement innovative processes",
                "pc": [
                  {
                    "name": "Promote continuous improvement and sustainability as essential to doing business"
                  },
                  {
                    "name": "Address the impact of change and consequences for people and implement transition plans"
                  },
                  {
                    "name": "Ensure objectives, timeframes, measures and communication plans are in place to manage implementation"
                  },
                  {
                    "name": "Implement contingency plans in the event of non-performance"
                  },
                  {
                    "name": "Follow up failure by prompt investigation and analysis of causes and manage emerging challenges and opportunities effectively"
                  },
                  {
                    "name": "Ensure that learnings from activities are captured and managed to inform future work"
                  },
                  {
                    "name": "Regularly evaluate continuous improvement systems and processes"
                  },
                  {
                    "name": "Communicate costs and benefits of innovations and improvements to relevant groups and individuals"
                  }
                ]
              }
            ],
            "code": "BSBMGT608",
            "name": "Manage innovation and continuous improvement"
          },
          {
            "EPC": [
              {
                "name": "Identify change requirements and opportunities",
                "pc": [
                  {
                    "name": "Identify strategic change needs through an analysis of organisational objectives"
                  },
                  {
                    "name": "Review existing policies and practices against strategic objectives to identify where changes are required"
                  },
                  {
                    "name": "Monitor the external environment to identify events or trends that impact on the achievement of organisational objectives"
                  },
                  {
                    "name": "Identify major operational change requirements due to performance gaps, business opportunities or threats, or management decisions"
                  },
                  {
                    "name": "Review and prioritise change requirements or opportunities with relevant managers"
                  },
                  {
                    "name": "Consult stakeholders, specialists and experts to assist in the identification of major change requirements and opportunities"
                  }
                ]
              },
              {
                "name": "Develop change management strategy",
                "pc": [
                  {
                    "name": "Undertake cost-benefit analysis for high priority change\nrequirements and opportunities"
                  },
                  {
                    "name": "Undertake risk analysis and apply problem solving and\ninnovation skills to identify barriers to change and agree and record mitigation strategies"
                  },
                  {
                    "name": "Develop change management project plan"
                  },
                  {
                    "name": "Obtain approvals from relevant authorities to confirm the change management process"
                  },
                  {
                    "name": "Assign resources to the project and agree reporting protocols with relevant managers"
                  }
                ]
              },
              {
                "name": "Implement change management strategy",
                "pc": [
                  {
                    "name": "Develop communication or education plan, in consultation with relevant groups and individuals, to promote the benefits of the change to the organisation and to minimise loss"
                  },
                  {
                    "name": "Arrange and manage activities to deliver the communication or education plans to relevant groups and individuals"
                  },
                  {
                    "name": "Consult with relevant groups and individuals for input into the change process "
                  },
                  {
                    "name": "Identify and respond to barriers to the change according to risk management plans "
                  },
                  {
                    "name": "Action interventions and activities set out in project plan according to project timetable"
                  },
                  {
                    "name": "Activate strategies for embedding the change"
                  },
                  {
                    "name": "Conduct regular evaluation and review and modify project plan where appropriate to achieve change program objectives"
                  }
                ]
              }
            ],
            "code": "BSBINN601",
            "name": "Lead and manage organisational change"
          },
          {
            "EPC": [
              {
                "name": "Review client's business domain",
                "pc": [
                  {
                    "name": "Research organisational service standards, values and culture to understand the organisational environment"
                  },
                  {
                    "name": "Investigate and document the goods and services provided by the organisation"
                  },
                  {
                    "name": "Review current service level agreements (SLAs) if appropriate"
                  }
                ]
              },
              {
                "name": "Develop new business with client",
                "pc": [
                  {
                    "name": "Research client service needs and preferred level of service"
                  },
                  {
                    "name": "Research opportunities for new business with client"
                  },
                  {
                    "name": "Develop draft proposals to cover these new initiatives"
                  }
                ]
              },
              {
                "name": "Negotiate new business initiatives",
                "pc": [
                  {
                    "name": "Conduct a session with the client to present the new opportunities"
                  },
                  {
                    "name": "Present proposals to the client in a clear, concise and comprehensive manner"
                  },
                  {
                    "name": "Present proposed cost and timeframes to the client"
                  },
                  {
                    "name": "Negotiate terms with the client and record alterations if required"
                  },
                  {
                    "name": "Clarify areas of uncertainty or disagreement"
                  },
                  {
                    "name": "Document agreement negotiated with the client"
                  }
                ]
              },
              {
                "name": "Monitor, adjust and implement features to maintain client focus",
                "pc": [
                  {
                    "name": "Assess progress in achieving new client initiatives"
                  },
                  {
                    "name": "Gather client feedback to improve the proposals"
                  },
                  {
                    "name": "Adjust service provided to the client based on client feedback and in line with organisational guidelines"
                  },
                  {
                    "name": "Document changes to new provisions"
                  }
                ]
              }
            ],
            "code": "ICTICT608",
            "name": "Interact with clients on a business level"
          },
          {
            "EPC": [
              {
                "name": "Identify the strategic and operational needs of the ICT project during the planning phase",
                "pc": [
                  {
                    "name": "Identify the strategic and operational needs of the project during the planning phase"
                  },
                  {
                    "name": "Identify and consider the project’s strategic conname and requirements"
                  },
                  {
                    "name": "Identify and consider the organisation’s strategic and business plans, and its output requirements"
                  },
                  {
                    "name": "Identify and explore client requirements and the impact of legislation and industry codes and standards"
                  },
                  {
                    "name": "Conduct a risk management analysis and develop and document a risk-management plan"
                  }
                ]
              },
              {
                "name": "Prepare the ICT project plan",
                "pc": [
                  {
                    "name": " Define and document precise specifications and terms of reference for the project"
                  },
                  {
                    "name": "Identify and document project budget, specified to a level that can be used for the management of sub-tasks"
                  },
                  {
                    "name": " Define skills needed for the successful completion of project"
                  },
                  {
                    "name": "Define, document and secure physical and other resources required to support the project"
                  }
                ]
              },
              {
                "name": "Assemble the ICT project team and commence work",
                "pc": [
                  {
                    "name": "Secure and brief appropriate project-team members regarding the project, their roles, levels of delegated responsibility and the outcomes to be achieved"
                  },
                  {
                    "name": "Implement effective communication processes to coordinate work and inform team members of progress"
                  },
                  {
                    "name": "Identify and communicate clear reporting processes for team members"
                  }
                ]
              },
              {
                "name": "Manage the IT project ",
                "pc": [
                  {
                    "name": "Monitor project progress according to project plan requirements, using appropriate project management tools and methodologies"
                  },
                  {
                    "name": " Manage team member performance, ensuring that their output is directed to the key performance indicators identified in the project plan"
                  },
                  {
                    "name": "Make corrections, changes and additions to the project plan in light of changing circumstances to ensure project aims and outcomes "
                  },
                  {
                    "name": "Monitor resourcing to support the project and make corrections to reflect changing circumstances"
                  },
                  {
                    "name": "Report overall project progress to senior management or funding bodies as required and in line with the project plan"
                  }
                ]
              },
              {
                "name": "Finalise the IT project",
                "pc": [
                  {
                    "name": "Finalise the project in line with the project plan"
                  },
                  {
                    "name": "Conduct handover to staff members responsible for the ongoing implementation or maintenance of project products or services efficiently, effectively and in line with organisational procedures"
                  },
                  {
                    "name": "Debrief project team members and relevant stakeholders about the conduct of the project and the outcomes achieved"
                  },
                  {
                    "name": "Prepare a report analysing the strengths and weaknesses of the project plan and the conduct of the project"
                  }
                ]
              },
              {
                "name": "Use the IT project to contribute to improved policies and processes",
                "pc": [
                  {
                    "name": "Identify and analyse opportunities for wider organisational learning, including changes to processes or policies generated by the project "
                  },
                  {
                    "name": "Forward opportunities for future further developments following project completion for consideration by senior management"
                  },
                  {
                    "name": "Consider the strategic impact of the project and feed into the organisation’s ongoing strategic planning processes"
                  }
                ]
              }
            ],
            "code": "ICTPMG609",
            "name": "Plan and direct complex ICT projects"
          },
          {
            "EPC": [
              {
                "name": "Establish a quality management plan",
                "pc": [
                  {
                    "name": "Determine project quality requirements with reference to project scope and stakeholder needs and expectations"
                  },
                  {
                    "name": "Adopt or agree on organisational quality policy and quality standards with stakeholders"
                  },
                  {
                    "name": "Determine project quality management approach, including proposed quality assurance processes and quality control measurement methods and benchmarks "
                  },
                  {
                    "name": "Negotiate project quality, cost, time trade-offs and changes to stakeholder expectations if necessary"
                  },
                  {
                    "name": " Develop a quality management plan for the project and obtain sign off"
                  }
                ]
              },
              {
                "name": "Perform ICT quality assurance processes",
                "pc": [
                  {
                    "name": "Execute quality assurance activities as the project progresses according to the quality management plan"
                  },
                  {
                    "name": " Identify project processes not meeting quality standards agreed in the quality management plan "
                  },
                  {
                    "name": " Raise project change request to action process changes or corrective actions, update project management plan and quality\nbaselines as necessary"
                  }
                ]
              },
              {
                "name": "Perform quality control",
                "pc": [
                  {
                    "name": "Validate project processes and deliverables against quality requirements as the project progresses"
                  },
                  {
                    "name": "Review quality control metrics and take action as necessary to investigate and understand the reasons for failure"
                  },
                  {
                    "name": "Use quality management tools to determine failures and root causes, and implement continuous improvement processes"
                  }
                ]
              }
            ],
            "code": "Manage ICT project quality",
            "name": "ICTPMG606"
          },
          {
            "EPC": [
              {
                "name": "Identify requirement for community of practice",
                "pc": [
                  {
                    "name": "Map organisational knowledge"
                  },
                  {
                    "name": "Identify existing informal communities of practice (CoPs)"
                  },
                  {
                    "name": "Identify situations where staff will benefit from closer cooperation across organisational boundaries"
                  },
                  {
                    "name": "Identify those in disparate areas that share work goals"
                  }
                ]
              },
              {
                "name": "Devise spaces for\ninvolvement",
                "pc": [
                  {
                    "name": "Enable electronic meeting spaces"
                  },
                  {
                    "name": "Enable shared storage areas, both public and private"
                  },
                  {
                    "name": "Enable group mailing capability"
                  },
                  {
                    "name": "Enable other appropriate technical facilitators"
                  }
                ]
              },
              {
                "name": "Invite participation",
                "pc": [
                  {
                    "name": "Publicise collaborative tools"
                  },
                  {
                    "name": "Invite staff in areas identified above to group events, such as training and conferences"
                  },
                  {
                    "name": "Allow new groups to coalesce spontaneously"
                  },
                  {
                    "name": "Accept different levels of participation"
                  }
                ]
              },
              {
                "name": "Assist evolution of community",
                "pc": [
                  {
                    "name": "Facilitate regular contact within CoPs"
                  },
                  {
                    "name": "Enable evolution of CoPs, including the disbanding of a CoP where its purpose has been achieved"
                  }
                ]
              }
            ],
            "code": "ICTICT606",
            "name": "Develop communities of practice "
          },
          {
            "EPC": [
              {
                "name": "Prepare to integrate sustainability into planning and design stages of ICT project",
                "pc": [
                  {
                    "name": "Evaluate suitable ICT projects into which sustainability can be integrated"
                  },
                  {
                    "name": "Negotiate with stakeholders to establish extent to which sustainability is to be integrated"
                  },
                  {
                    "name": "Research and identify suitable technology solutions applicable to project"
                  },
                  {
                    "name": "Gather power consumption data on ICT equipment required for energy audit based on agreed standard"
                  }
                ]
              },
              {
                "name": "Devise strategies for incorporating sustainability into ICT project",
                "pc": [
                  {
                    "name": "Determine and oversee implementation of short term technology solutions to achieve reduction of power consumption"
                  },
                  {
                    "name": "Initiate and progress sustainable management principles that result in reduced environmental impact "
                  },
                  {
                    "name": "Establish, regularly review and improve key performance indicators (KPI) on sustainability performance "
                  },
                  {
                    "name": "Incorporate innovative planning and design rules for ICT projects that foster sustainability and environmental best practice"
                  }
                ]
              },
              {
                "name": "Analyse energy audit data",
                "pc": [
                  {
                    "name": "Identify energy usage within scope of ICT project and provide detailed report"
                  },
                  {
                    "name": "Estimate potential energy savings and payback periods for recommended actions"
                  },
                  {
                    "name": "Estimate carbon dioxide (CO2) emissions for nominated project"
                  },
                  {
                    "name": "Evaluate estimated CO2 emissions with comparable benchmarks"
                  },
                  {
                    "name": "Make recommendations in order of priority and give estimates of implementation costs on integration of sustainability for other ICT projects"
                  }
                ]
              }
            ],
            "code": "ICTSUS601",
            "name": "Integrate sustainability in ICT planning and design projects"
          },
          {
            "EPC": [
              {
                "name": "Compare the business with competitor businesses",
                "pc": [
                  {
                    "name": "Investigate information on business markets, customers and methods of doing business"
                  },
                  {
                    "name": "Analyse and compare the current market for the business and the customer base with typical business markets and customers"
                  },
                  {
                    "name": "Analyse and contrast current business relationships, business processes and methods of doing business with e-facilitated businesses"
                  }
                ]
              },
              {
                "name": "Identify business opportunities for innovation and reform",
                "pc": [
                  {
                    "name": "Investigate innovation and reform of aspects of the business through business strategies"
                  },
                  {
                    "name": "Assess opportunities for their compatibility with business goals and objectives, and conduct a cost-benefit analysis for each"
                  },
                  {
                    "name": "Evaluate the degree of likely change and the ramifications for the business and its culture for each opportunity"
                  },
                  {
                    "name": "Conduct a risk management analysis and formulate a plan for dealing with contingencies according to organisational requirements"
                  },
                  {
                    "name": "Rank opportunities in terms of their viability and applicability to the organisation"
                  },
                  {
                    "name": "Include opportunities for innovation in the organisation’s business strategy and prioritise them for implementation"
                  }
                ]
              },
              {
                "name": "Implement innovation",
                "pc": [
                  {
                    "name": "Redesign aspects of the business in an innovative manner using online technologies according to the organisation’s business strategy"
                  },
                  {
                    "name": "Integrate innovation into the business and monitor to gauge usefulness and maximise implementation"
                  },
                  {
                    "name": "Review business innovation in consultation with users and make recommendations for improvement or further innovation"
                  }
                ]
              }
            ],
            "code": "ICTICT604",
            "name": "Identify and implement business innovation"
          },
          {
            "EPC": [
              {
                "name": "Analyse existing knowledge management arrangements",
                "pc": [
                  {
                    "name": "Identify existing arrangements for the capture and use of knowledge, and information, from both internal and external sources"
                  },
                  {
                    "name": "Distinguish between arrangements for managing knowledge and information management"
                  },
                  {
                    "name": "Analyse the importance of knowledge management concepts in the identified organisation"
                  },
                  {
                    "name": "Evaluate the effectiveness of existing procedures and systems in meeting the needs of clients, organisational aims, objectives, and standards"
                  },
                  {
                    "name": "Identify the improvements in the organisation’s strategic use of knowledge, and prepare a cost-benefit analysis "
                  }
                ]
              },
              {
                "name": "Evaluate knowledge management options",
                "pc": [
                  {
                    "name": "Investigate the methods for capturing and using knowledge held by people within a business, and identify and evaluate barriers to their use"
                  },
                  {
                    "name": "Evaluate knowledge management software and make recommendations regarding its usefulness, and likely benefit, to the organisation "
                  },
                  {
                    "name": "Investigate incentives and reward systems to support knowledge management for their relevance to a business"
                  },
                  {
                    "name": "Determine non-technical business requirements for maintaining and accessing an integrated knowledge database, according to organisational requirements"
                  }
                ]
              },
              {
                "name": "Develop a knowledge-management strategy",
                "pc": [
                  {
                    "name": "Develop a knowledge management strategy in consultation with staff for the capture and strategic use of organisational knowledge"
                  },
                  {
                    "name": "Design business processes to support knowledge management, according to the organisation’s knowledge management strategy, and budget"
                  },
                  {
                    "name": "Plan an executive support system as part of the knowledge management strategy, to improve managerial decision-making according to organisational requirements"
                  },
                  {
                    "name": "Cost the technology requirements for the implementation of the strategy, and include this costing in knowledge management budgeting"
                  },
                  {
                    "name": "Design, or redesign, processes for a periodic review of knowledge management within the business in order to ensure ongoing efficiency and effectiveness"
                  },
                  {
                    "name": "Ensure that the knowledge management strategy meets the organisational requirements identified in its overall business plan, and knowledge management strategy"
                  }
                ]
              }
            ],
            "code": "ICTDBS602",
            "name": "Develop a knowledge management strategy"
          },
          {
            "EPC": [
              {
                "name": "Implement knowledge management system and procedures",
                "pc": [
                  {
                    "name": "Foster a culture of sharing knowledge within the business through a system of formal and informal incentives and rewards"
                  },
                  {
                    "name": "Implement policy and procedures for capturing knowledge within the organisation according to the business knowledge management strategy, and integrate this knowledge into existing business processes to change the enterprise processes"
                  },
                  {
                    "name": "Model methods of contributing to the organisation’s knowledge management system, and provide learning and development opportunities for staff to assist them to contribute and provide feedback"
                  },
                  {
                    "name": "Provide coaching, mentoring and ongoing support to staff in accessing and using the organisation’s knowledge management system according to the business knowledge management strategy"
                  },
                  {
                    "name": "Manage protection and security of knowledge or information and levels of access according to organisational requirements"
                  }
                ]
              },
              {
                "name": "Maintain business knowledge base",
                "pc": [
                  {
                    "name": "Monitor input procedures to ensure that sources are tapped and knowledge is captured according to the business knowledge management strategy, and to ensure the effectiveness of accurate data capture"
                  },
                  {
                    "name": "Collect and analyse data on access and use of the knowledge management system to determine the organisation’s strategic use of knowledge"
                  },
                  {
                    "name": "Implement contingency measures to address shortfalls in the knowledge management system and procedures, according to level of responsibility and authority"
                  }
                ]
              },
              {
                "name": "Review knowledge management system and procedures",
                "pc": [
                  {
                    "name": "Evaluate the knowledge management system and procedures to ensure they meet the needs of clients, organisational aims, objectives and standards "
                  },
                  {
                    "name": "Periodically review the organisational knowledge content\nfor accuracy and currency to ensure that it remains in line with\norganisational requirements"
                  },
                  {
                    "name": "Identify improvements to the system and to the organisation’s strategic use of knowledge in consultation with users, and prepare a cost-benefit analysis with recommendations"
                  }
                ]
              }
            ],
            "code": "ICTICT605",
            "name": "Implement a knowledge management strategy"
          },
          {
            "EPC": [
              {
                "name": "Manage enterprise cloud security controls",
                "pc": [
                  {
                    "name": "Identify the cloud security issues faced by different delivery and deployment models relevant to the enterprise"
                  },
                  {
                    "name": "Determine the specific enterprise areas of security responsibility"
                  },
                  {
                    "name": "Implement the most relevant security controls and measures, to protect identified areas of responsibility"
                  }
                ]
              },
              {
                "name": "Manage enterprise cloud privacy and compliance",
                "pc": [
                  {
                    "name": "Identify the relevant compliance regulations relating to data storage"
                  },
                  {
                    "name": "Determine the most relevant business continuity and data recovery plans"
                  },
                  {
                    "name": "Identify, secure and maintain, the relevant logs and audit trails"
                  },
                  {
                    "name": "Investigate and review legal, privacy and contractual issues to ensure that they meet the enterprise policy"
                  }
                ]
              },
              {
                "name": "Review, implement and document cloud security, privacy and compliance enhancements",
                "pc": [
                  {
                    "name": "Implement the appropriate changes, and integrate them into the current enterprise’s continuity of operation program (COOP)"
                  },
                  {
                    "name": "Establish a performance measurement program, to evaluate the security effectiveness of implemented security controls"
                  },
                  {
                    "name": "Provide relevant documentation as part of COOP, for audit tracking purposes"
                  }
                ]
              }
            ],
            "code": "ICTNWK616",
            "name": "Manage security, privacy and compliance of cloud service"
          },
          {
            "EPC": [
              {
                "name": "Confirm the database design",
                "pc": [
                  {
                    "name": "Review the database design document, including the data structures, queries, reports and user interface"
                  },
                  {
                    "name": "Identify any possible “Big Data” applications"
                  },
                  {
                    "name": "Compare the database access and security design, with the business security plan"
                  }
                ]
              },
              {
                "name": "Identify the required data and sources",
                "pc": [
                  {
                    "name": "Identify the required data, with reference to the enterprise’s knowledge management strategy"
                  },
                  {
                    "name": "Identify subject areas, with reference to the business processes and the required data"
                  },
                  {
                    "name": "Explore operational data, define the warehouse sources and record the outcomes"
                  },
                  {
                    "name": "Develop the warehouse source specifications, with reference to the existing data tables and files"
                  }
                ]
              },
              {
                "name": "Determine warehouse operational steps and processes",
                "pc": [
                  {
                    "name": "Develop the warehouse targets, with reference to the business processes and the required data"
                  },
                  {
                    "name": "Identify the warehouse agents, according to the system’s configuration"
                  },
                  {
                    "name": "Identify and develop, warehouse steps and processes"
                  }
                ]
              },
              {
                "name": "Design and develop the warehouse features",
                "pc": [
                  {
                    "name": "Design and develop the warehouse user interface, with reference to the principles of user interface design"
                  },
                  {
                    "name": "Develop and implement the warehouse security strategy, according to the enterprise’s security plan"
                  },
                  {
                    "name": "Identify dimension tables and fact tables, with reference to the required data"
                  },
                  {
                    "name": "Cost the technology requirements for the implementation of the warehouse security strategy, and include them in e-business budgeting"
                  },
                  {
                    "name": "Develop a warehouse information catalogue, with reference to the enterprise’s knowledge management strategy"
                  }
                ]
              },
              {
                "name": "Test and implement the data warehouse",
                "pc": [
                  {
                    "name": "Test the data warehouse against the business requirements, to ensure that iterations meet the business objectives"
                  },
                  {
                    "name": "Recommend changes to business processes, to ensure compatibility with the data warehouse and the knowledge management strategy"
                  },
                  {
                    "name": "Implement the data warehouse"
                  },
                  {
                    "name": "Establish an ongoing maintenance schedule in order to keep the system efficient"
                  },
                  {
                    "name": "Benchmark and document, the performance level of the data\nwarehouse"
                  }
                ]
              },
              {
                "name": "Finalise work processes",
                "pc": [
                  {
                    "name": "Arrange for users to have ongoing training in the data warehouse"
                  },
                  {
                    "name": "Validate the results "
                  },
                  {
                    "name": "Obtain sign-off for the data warehouse"
                  }
                ]
              }
            ],
            "code": "ICTDBS601",
            "name": "Build a data warehouse"
          },
          {
            "EPC": [
              {
                "name": "Investigate the knowledge management system",
                "pc": [
                  {
                    "name": "Review the structure of the existing knowledge management system, and develop an understanding of its operation"
                  },
                  {
                    "name": "Interview the client and staff to determine information requirements"
                  },
                  {
                    "name": "Identify frequently requested information"
                  },
                  {
                    "name": "Identify frequently requested information"
                  },
                  {
                    "name": "Document the structure and forward to the appropriate person for approval"
                  }
                ]
              },
              {
                "name": "Create a knowledge management system",
                "pc": [
                  {
                    "name": "Retrieve the identified information"
                  },
                  {
                    "name": "Organise information to follow the approved structure"
                  },
                  {
                    "name": "Document the information structure"
                  }
                ]
              },
              {
                "name": "Distribute and monitor knowledge management system documentation",
                "pc": [
                  {
                    "name": "Distribute knowledge management system documentation\nto the client and staff"
                  },
                  {
                    "name": "Gather feedback from the client and staff, and incorporate\ninto improving systems and processes"
                  },
                  {
                    "name": "Monitor the use of the knowledge management system to\ndetermine its effectiveness "
                  },
                  {
                    "name": "Make changes to the knowledge management system "
                  },
                  {
                    "name": "Make knowledge management system documentation\navailable"
                  },
                  {
                    "name": "Implement and monitor process improvements"
                  }
                ]
              }
            ],
            "code": "ICTDBS501",
            "name": "Monitor and improve knowledge management system"
          }
        ]
      };
    };

    priv.set_course_details = function() {
      $('#course-name').text(pub.data.name + ' (' + pub.data.code + ')');
    };

    priv.set_unit_sub_lessons = function(subLessons, content){
      for(var idx in subLessons) {
        var newContent = content.replace('%name%', subLessons[idx].name)

        $('#left').append(newContent);
      }
    }

    priv.set_unit_lessons = function(unitLessons, content) {
      for(var idx in unitLessons) {
        content = content.replace('%sub-unit-name%', unitLessons[idx].name)

        priv.set_unit_sub_lessons(unitLessons[idx].pc, content);
      }
    }

    priv.set_course_units = function() {
      for(var idx in pub.data.units) {
        var unitId = parseInt(idx)+1;
        var content = priv.elemTmpl.replace('%code%', pub.data.units[idx].code).replace('%unit-name%', pub.data.units[idx].name)

        priv.set_unit_lessons(pub.data.units[idx].EPC, content);
      }
    };

    priv.set_tooltip = function() {
      $('.lesson').each(function() {
        var title = `(${$(this).attr('data-code')}) - ${$(this).attr('data-unit-name')}: ${$(this).attr('data-sub-unit-name')}`;
        $(this).attr('title', title)
      })
    }

    pub.start = function() {
      priv.get_json();
      priv.set_course_details();
      priv.set_course_units();
      priv.set_tooltip();

      dragula({
        isContainer: function (el) {
          return el.classList.contains('dragula-container');
        },
        removeOnSpill: true
      });

      $('.lesson').tooltipster();

      $('#createBox').on('click', function(e) {
        e.preventDefault();
        result = window.prompt("Type the box's name");
        var newId = 'box_' + new Date().getTime(),
            newBox = priv.boxTmpl.replace('%name%', result).replace('%id%', newId);
        $(newBox).appendTo($('#right'));
      });
    };

    return pub;
  }()
};

Cti.adv_diploma_it.classes.start();
