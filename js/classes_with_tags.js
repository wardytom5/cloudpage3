if (window.Cti === undefined) window.Cti = {};

Cti.adv_diploma_it = {
  classes: function() {
    var priv = {};
    var pub = {};

    priv.unitTmpl = `
      <div class="row">
        <div class="col-md-12">
          <div class="card unit" id="%unitId%">
            <div class="card-head card-head-sm style-primary-dark">
              <header>
                 %unitId%) %unitName% (%unitCode%)
              </header>
            </div>
            <div class="card-body subUnit">
              <div class="tags">
                <h4>Tags: </h4>
                <select multiple="true" data-role="tagsinput" />
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    priv.subUnitTmpl = `
      <div class="card card-underline">
        <div class="card-head card-head-xs style-primary">
          <header>%subUnitId%) %subUnitName%</header>
        </div>
        <div class="card-body">
          <ul>

          </ul>
        </div>
      </div>
    `;

    priv.get_json = function() {
      pub.data = {
        "name": "Advanced Diploma of Information Technology",
        "code": "ICT60115",
        "units": [
          {
            "name": "Manage Copyright, Ethics and Privacy in an IT Environment",
            "code": "ICTICT610",
            "EPC": {
              "1": {
                "pc": {
                  "1.1": {
                    "text": "Review current Australian copyright law, and in particular its relationship to information and communications technology (ICT)"
                  },
                  "1.2": {
                    "text": "Ensure that team members are aware of Australian copyright law and how it affects their work"
                  },
                  "1.3": {
                    "text": "Institute measures to ensure that copyright is not breached"
                  },
                  "1.4": {
                    "text": "Institute regular reviews to ensure organisational copyright requirements are up to date and team members are adhering to these requirements"
                  },
                  "1.5": {
                    "text": "Distribute updated versions if required"
                  }
                },
                "name": "Manage adherence to copyright regulations"
              },
              "2": {
                "name": "Manage ethical behaviour",
                "pc": {
                  "2.1": {
                    "text": "Review appropriate code of ethics, both organisational and ICT specific"
                  },
                  "2.2": {
                    "text": "Acquaint team members with ethical requirements"
                  },
                  "2.3": {
                    "text": "Institute regular reviews of team members ethical work practices and feedback to ensure correct application of the code"
                  },
                  "2.4": {
                    "text": "Ensure that stakeholders are aware of ethics code, and adjust appropriately following stakeholder feedback"
                  },
                  "2.5": {
                    "text": "Institute regular reviews of stakeholder understanding and application of code of ethics"
                  },
                  "2.6": {
                    "text": "Establish a review and grievance procedure to enable confidential reporting of ethical issues"
                  },
                  "2.7": {
                    "text": "Institute regular reviews of code of ethics, updating and distributing as required"
                  }
                }
              },
              "3": {
                "name": "Manage privacy",
                "pc": {
                  "3.1": {
                    "text": "Institute a regular review of the relevance of legislation and standards to organisational outcomes, the organisation's privacy policy and procedures, and the work practices of team members with regard to these requirements"
                  },
                  "3.2": {
                    "text": "Determine and ensure the integrity, confidentiality, security and availability of information as required by the organisational policy"
                  },
                  "3.3": {
                    "text": "Ensure continued confidentiality and proprietary rights of stakeholders' interests"
                  },
                  "3.4": {
                    "text": "Contribute to the creation or updating of the organisation's privacy policy and procedures to align with privacy legislation"
                  },
                  "3.5": {
                    "text": "Distribute new or revised policy and procedures to stakeholders"
                  },
                  "3.6": {
                    "text": "Implement new work procedures and collect feedback from stakeholders"
                  }
                }
              }
            }
          },
          {
            "name": "Create cloud computing services",
            "EPC": {
              "1": {
                "pc": {
                  "1.1": {
                    "text": "Gather requirements for the web service or cloud computing application"
                  },
                  "1.2": {
                    "text": "Determine the development environment and tools required to create web service or cloud computing application"
                  },
                  "1.3": {
                    "text": "Identify any possible big data applications"
                  },
                  "1.4": {
                    "text": "Define architecture and framework"
                  }
                },
                "name": "Design web service or cloud computing application"
              },
              "2": {
                "name": "Build web service",
                "pc": {
                  "2.1": {
                    "text": "Itemise required functionality"
                  },
                  "2.2": {
                    "text": " Build web service in the determined environment to meet required functionality"
                  }
                }
              },
              "3": {
                "name": "Build cloud computing application",
                "pc": {
                  "3.1": {
                    "text": "Determine required functionality"
                  },
                  "3.2": {
                    "text": "Build cloud computing application in the determined environment to meet the required functionality"
                  }
                }
              },
              "4": {
                "name": "Test web service or cloud computing application",
                "pc": {
                  "4.1": {
                    "text": "Test web service or cloud computing application for overall functionality according to requirements"
                  },
                  "4.2": {
                    "text": "Iterate design or build until test results meet requirements"
                  }
                }
              },
              "5": {
                "name": "Deploy web service or cloud computing application",
                "pc": {
                  "5.1": {
                    "text": "Deploy web service or cloud computing application to the specified environment"
                  },
                  "5.2": {
                    "text": "Publish web service or cloud computing application to the specified environment"
                  }
                }
              }
            },
            "code": "ICTPRG604"
          },
          {
            "name": "Lead and manage team effectiveness",
            "code": "BSBWOR502",
            "EPC": {
              "1": {
                "name": "Establish team performance plan",
                "pc": {
                  "1.1": {
                    "text": "Consult team members to establish a common understanding of team purpose, roles, responsibilities and accountabilities in accordance with organisational goals, plans and objectives"
                  },
                  "1.2": {
                    "text": "Develop performance plans to establish expected outcomes, outputs, key performance indicators (KPIs) and goals for work team"
                  },
                  "1.3": {
                    "text": "Support team members in meeting expected performance outcomes"
                  }
                }
              },
              "2": {
                "name": "Develop and facilitate team cohesion",
                "pc": {
                  "2.1": {
                    "text": "Develop strategies to ensure team members have input into planning, decision making and operational aspects of work team"
                  },
                  "2.2": {
                    "text": "Develop policies and procedures to ensure team members take responsibility for own work and assist others to undertake required roles and responsibilities"
                  },
                  "2.3": {
                    "text": "Provide feedback to team members to encourage, value and reward individual and team efforts and contributions"
                  },
                  "2.4": {
                    "text": "Develop processes to ensure that issues, concerns and problems identified by team members are recognised and addressed"
                  }
                }
              },
              "3": {
                "name": "Facilitate teamwork",
                "pc": {
                  "3.1": {
                    "text": "Encourage team members and individuals to participate in and to take responsibility for team activities, including communication processes"
                  },
                  "3.2": {
                    "text": "Support the team in identifying and resolving work performance problems"
                  },
                  "3.3": {
                    "text": "Ensure own contribution to work team serves as a role model for others and enhances the organisation’s image for all stakeholders"
                  }
                }
              },
              "4": {
                "name": "Liase with stakeholders",
                "pc": {
                  "4.1": {
                    "text": "Establish and maintain open communication processes with all stakeholders"
                  },
                  "4.2": {
                    "text": "Communicate information from line manager/management to the team"
                  },
                  "4.3": {
                    "text": "Communicate unresolved issues, concerns and problems raised by team members and follow-up with line manager/management and other relevant stakeholders"
                  },
                  "4.4": {
                    "text": "Evaluate and take necessary corrective action regarding unresolved issues, concerns and problems raised by internal or external stakeholders"
                  }
                }
              }
            }
          },
          {
            "name": "Manage innovation and continuous improvement",
            "code": "BSBMGT608",
            "EPC": {
              "1": {
                "name": "Review programs, systems and processes",
                "pc": {
                  "1.1": {
                    "text": "Establish strategies to monitor and evaluate performance and sustainability of key systems and processes"
                  },
                  "1.2": {
                    "text": "Undertake detailed analyses of supply chains, and operational, product and service delivery systems"
                  },
                  "1.3": {
                    "text": "Identify performance measures, and assessment tools and techniques, and evaluate their effectiveness"
                  },
                  "1.4": {
                    "text": "Analyse performance reports and variance from plans for key result areas of the organisation"
                  },
                  "1.5": {
                    "text": "Identify and analyse changing trends and opportunities relevant to the organisation"
                  },
                  "1.6": {
                    "text": "Seek advice from specialists, where appropriate, to identify technology and electronic commerce opportunities"
                  }
                }
              },
              "2": {
                "name": "Develop options for continuous improvement",
                "pc": {
                  "2.1": {
                    "text": "Brief groups on performance improvement strategies and innovation as an essential element of competition"
                  },
                  "2.2": {
                    "text": "Foster creative climate and organisational learning by promoting interaction within and between work groups"
                  },
                  "2.3": {
                    "text": "Encourage, test and recognise new ideas and entrepreneurial behaviour where successful"
                  },
                  "2.4": {
                    "text": "Accept failure of an idea during trialling and recognise, celebrate and embed success into systems"
                  },
                  "2.5": {
                    "text": "Undertake risk management and cost-benefit analysis for each option or idea approved for trial"
                  },
                  "2.6": {
                    "text": "Approve innovations through agreed organisational processes"
                  }
                }
              },
              "3": {
                "name": "Implement innovative processes",
                "pc": {
                  "3.1": {"text": "Promote continuous improvement and sustainability as essential to doing business"},
                  "3.2": {"text": "Address the impact of change and consequences for people and implement transition plans"},
                  "3.3": {"text": "Ensure objectives, timeframes, measures and communication plans are in place to manage implementation"},
                  "3.4": {"text": "Implement contingency plans in the event of non-performance"},
                  "3.5": {"text": "Follow up failure by prompt investigation and analysis of causes and manage emerging challenges and opportunities effectively"},
                  "3.6": {"text": "Ensure that learnings from activities are captured and managed to inform future work"},
                  "3.7": {"text": "Regularly evaluate continuous improvement systems and processes"},
                  "3.8": {"text": "Communicate costs and benefits of innovations and improvements to relevant groups and individuals"}
                }
              }
            }
          },
          {
            "name": "Lead and manage organisational change",
            "code": "BSBINN601",
            "EPC": {
              "1": {
                "name": "Identify change requirements and opportunities",
                "pc": {
                  "1.1": {
                    "text": "Identify strategic change needs through an analysis of organisational objectives"
                  },
                  "1.2": {
                    "text": "Review existing policies and practices against strategic objectives to identify where changes are required"
                  },
                  "1.3": {
                    "text": "Monitor the external environment to identify events or trends that impact on the achievement of organisational objectives"
                  },
                  "1.4": {
                    "text": "Identify major operational change requirements due to performance gaps, business opportunities or threats, or management decisions"
                  },
                  "1.5": {
                    "text": "Review and prioritise change requirements or opportunities with relevant managers"
                  },
                  "1.6": {
                    "text": "Consult stakeholders, specialists and experts to assist in the identification of major change requirements and opportunities"
                  }
                }
              },
              "2": {
                "name": "Develop change management strategy",
                "pc": {
                  "2.1": {
                    "text": "Undertake cost-benefit analysis for high priority change\nrequirements and opportunities"
                  },
                  "2.2": {
                    "text": "Undertake risk analysis and apply problem solving and\ninnovation skills to identify barriers to change and agree and record mitigation strategies"
                  },
                  "2.3": {
                    "text": "Develop change management project plan"
                  },
                  "2.4": {
                    "text": "Obtain approvals from relevant authorities to confirm the change management process"
                  },
                  "2.5": {
                    "text": "Assign resources to the project and agree reporting protocols with relevant managers"
                  }
                }
              },
              "3": {
                "name": "Implement change management strategy",
                "pc": {
                  "3.1": {
                    "text": "Develop communication or education plan, in consultation with relevant groups and individuals, to promote the benefits of the change to the organisation and to minimise loss"
                  },
                  "3.2": {
                    "text": "Arrange and manage activities to deliver the communication or education plans to relevant groups and individuals"
                  },
                  "3.3": {
                    "text": "Consult with relevant groups and individuals for input into the change process "
                  },
                  "3.4": {
                    "text": "Identify and respond to barriers to the change according to risk management plans "
                  },
                  "3.5": {
                    "text": "Action interventions and activities set out in project plan according to project timetable"
                  },
                  "3.6": {
                    "text": "Activate strategies for embedding the change"
                  },
                  "3.7": {
                    "text": "Conduct regular evaluation and review and modify project plan where appropriate to achieve change program objectives"
                  }
                }
              }
            }
          },
          {
            "name": "Interact with clients on a business level",
            "code": "ICTICT608",
            "EPC": {
              "1": {
                "name": "Review client's business domain",
                "pc": {
                  "1.1": {
                    "text": "Research organisational service standards, values and culture to understand the organisational environment"
                  },
                  "1.2": {
                    "text": "Investigate and document the goods and services provided by the organisation"
                  },
                  "1.3": {
                    "text": "Review current service level agreements (SLAs) if appropriate"
                  }
                }
              },
              "2": {
                "name": "Develop new business with client",
                "pc": {
                  "2.1": {
                    "text": "Research client service needs and preferred level of service"
                  },
                  "2.2": {
                    "text": "Research opportunities for new business with client"
                  },
                  "2.3": {
                    "text": "Develop draft proposals to cover these new initiatives"
                  }
                }
              },
              "3": {
                "name": "Negotiate new business initiatives",
                "pc": {
                  "3.1": {
                    "text": "Conduct a session with the client to present the new opportunities"
                  },
                  "3.2": {
                    "text": "Present proposals to the client in a clear, concise and comprehensive manner"
                  },
                  "3.3": {
                    "text": "Present proposed cost and timeframes to the client"
                  },
                  "3.4": {
                    "text": "Negotiate terms with the client and record alterations if required"
                  },
                  "3.5": {
                    "text": "Clarify areas of uncertainty or disagreement"
                  },
                  "3.6": {
                    "text": "Document agreement negotiated with the client"
                  }
                }
              },
              "4": {
                "name": "Monitor, adjust and implement features to maintain client focus",
                "pc": {
                  "4.1": {
                    "text": "Assess progress in achieving new client initiatives"
                  },
                  "4.2": {
                    "text": "Gather client feedback to improve the proposals"
                  },
                  "4.3": {
                    "text": "Adjust service provided to the client based on client feedback and in line with organisational guidelines"
                  },
                  "4.4": {
                    "text": "Document changes to new provisions"
                  }
                }
              }
            }
          },
          {
            "name": "Plan and direct complex ICT projects",
            "code": "ICTPMG609",
            "EPC": {
              "1": {
                "name": "Identify the strategic and operational needs of the ICT project during the planning phase",
                "pc": {
                  "1.1": {
                    "text": "Identify the strategic and operational needs of the project during the planning phase"
                  },
                  "1.2": {
                    "text": "Identify and consider the project’s strategic context and requirements"
                  },
                  "1.3": {
                    "text": "Identify and consider the organisation’s strategic and business plans, and its output requirements"
                  },
                  "1.4": {
                    "text": "Identify and explore client requirements and the impact of legislation and industry codes and standards"
                  },
                  "1.5": {
                    "text": "Conduct a risk management analysis and develop and document a risk-management plan"
                  }
                }
              },
              "2": {
                "name": "Prepare the ICT project plan",
                "pc": {
                  "2.1": {
                    "text": " Define and document precise specifications and terms of reference for the project"
                  },
                  "2.2": {
                    "text": "Identify and document project budget, specified to a level that can be used for the management of sub-tasks"
                  },
                  "2.3": {
                    "text": " Define skills needed for the successful completion of project"
                  },
                  "2.4": {
                    "text": "Define, document and secure physical and other resources required to support the project"
                  }
                }
              },
              "3": {
                "name": "Assemble the ICT project team and commence work",
                "pc": {
                  "3.1": {
                    "text": "Secure and brief appropriate project-team members regarding the project, their roles, levels of delegated responsibility and the outcomes to be achieved"
                  },
                  "3.2": {
                    "text": "Implement effective communication processes to coordinate work and inform team members of progress"
                  },
                  "3.3": {
                    "text": "Identify and communicate clear reporting processes for team members"
                  }
                }
              },
              "4": {
                "name": "Manage the IT project ",
                "pc": {
                  "4.1": {
                    "text": "Monitor project progress according to project plan requirements, using appropriate project management tools and methodologies"
                  },
                  "4.2": {
                    "text": " Manage team member performance, ensuring that their output is directed to the key performance indicators identified in the project plan"
                  },
                  "4.3": {
                    "text": "Make corrections, changes and additions to the project plan in light of changing circumstances to ensure project aims and outcomes "
                  },
                  "4.4": {
                    "text": "Monitor resourcing to support the project and make corrections to reflect changing circumstances"
                  },
                  "4.5": {
                    "text": "Report overall project progress to senior management or funding bodies as required and in line with the project plan"
                  }
                }
              },
              "5": {
                "name": "Finalise the IT project",
                "pc": {
                  "5.1": {
                    "text": "Finalise the project in line with the project plan"
                  },
                  "5.2": {
                    "text": "Conduct handover to staff members responsible for the ongoing implementation or maintenance of project products or services efficiently, effectively and in line with organisational procedures"
                  },
                  "5.3": {
                    "text": "Debrief project team members and relevant stakeholders about the conduct of the project and the outcomes achieved"
                  },
                  "5.4": {
                    "text": "Prepare a report analysing the strengths and weaknesses of the project plan and the conduct of the project"
                  }
                }
              },
              "6": {
                "name": "Use the IT project to contribute to improved policies and processes",
                "pc": {
                  "6.1": {
                    "text": "Identify and analyse opportunities for wider organisational learning, including changes to processes or policies generated by the project "
                  },
                  "6.2": {
                    "text": "Forward opportunities for future further developments following project completion for consideration by senior management"
                  },
                  "6.3": {
                    "text": "Consider the strategic impact of the project and feed into the organisation’s ongoing strategic planning processes"
                  }
                }
              }
            }
          },
          {
            "name": "Manage ICT project quality",
            "code": "ICTPMG606",
            "EPC": {
              "1": {
                "name": "Establish a quality management plan",
                "pc": {
                  "1.1": {
                    "text": "Determine project quality requirements with reference to project scope and stakeholder needs and expectations"
                  },
                  "1.2": {
                    "text": "Adopt or agree on organisational quality policy and quality standards with stakeholders"
                  },
                  "1.3": {
                    "text": "Determine project quality management approach, including proposed quality assurance processes and quality control measurement methods and benchmarks "
                  },
                  "1.4": {
                    "text": "Negotiate project quality, cost, time trade-offs and changes to stakeholder expectations if necessary"
                  },
                  "1.5": {
                    "text": " Develop a quality management plan for the project and obtain sign off"
                  }
                }
              },
              "2": {
                "name": "Perform ICT quality assurance processes",
                "pc": {
                  "2.1": {
                    "text": "Execute quality assurance activities as the project progresses according to the quality management plan"
                  },
                  "2.2": {
                    "text": " Identify project processes not meeting quality standards agreed in the quality management plan "
                  },
                  "2.3": {
                    "text": " Raise project change request to action process changes or corrective actions, update project management plan and quality\nbaselines as necessary"
                  }
                }
              },
              "3": {
                "name": "Perform quality control",
                "pc": {
                  "3.1": {
                    "text": "Validate project processes and deliverables against quality requirements as the project progresses"
                  },
                  "3.2": {
                    "text": "Review quality control metrics and take action as necessary to investigate and understand the reasons for failure"
                  },
                  "3.3": {
                    "text": "Use quality management tools to determine failures and root causes, and implement continuous improvement processes"
                  }
                }
              }
            }
          },
          {
            "name": "Develop communities of practice ",
            "code": "ICTICT606",
            "EPC": {
              "1": {
                "name": "Identify requirement for community of practice",
                "pc": {
                  "1.1": {
                    "text": "Map organisational knowledge"
                  },
                  "1.2": {
                    "text": "Identify existing informal communities of practice (CoPs)"
                  },
                  "1.3": {
                    "text": "Identify situations where staff will benefit from closer cooperation across organisational boundaries"
                  },
                  "1.4": {
                    "text": "Identify those in disparate areas that share work goals"
                  }
                }
              },
              "2": {
                "name": "Devise spaces for\ninvolvement",
                "pc": {
                  "2.1": {
                    "text": "Enable electronic meeting spaces"
                  },
                  "2.2": {
                    "text": "Enable shared storage areas, both public and private"
                  },
                  "2.3": {
                    "text": "Enable group mailing capability"
                  },
                  "2.4": {
                    "text": "Enable other appropriate technical facilitators"
                  }
                }
              },
              "3": {
                "name": "Invite participation",
                "pc": {
                  "3.1": {
                    "text": "Publicise collaborative tools"
                  },
                  "3.2": {
                    "text": "Invite staff in areas identified above to group events, such as training and conferences"
                  },
                  "3.3": {
                    "text": "Allow new groups to coalesce spontaneously"
                  },
                  "3.4": {
                    "text": "Accept different levels of participation"
                  }
                }
              },
              "4": {
                "name": "Assist evolution of community",
                "pc": {
                  "4.1": {
                    "text": "Facilitate regular contact within CoPs"
                  },
                  "4.2": {
                    "text": "Enable evolution of CoPs, including the disbanding of a CoP where its purpose has been achieved"
                  }
                }
              }
            }
          },
          {
            "name": "Integrate sustainability in ICT planning and design projects",
            "code": "ICTSUS601",
            "EPC": {
              "1": {
                "name": "Prepare to integrate sustainability into planning and design stages of ICT project",
                "pc": {
                  "1.1": {
                    "text": "Evaluate suitable ICT projects into which sustainability can be integrated"
                  },
                  "1.2": {
                    "text": "Negotiate with stakeholders to establish extent to which sustainability is to be integrated"
                  },
                  "1.3": {
                    "text": "Research and identify suitable technology solutions applicable to project"
                  },
                  "1.4": {
                    "text": "Gather power consumption data on ICT equipment required for energy audit based on agreed standard"
                  }
                }
              },
              "2": {
                "name": "Devise strategies for incorporating sustainability into ICT project",
                "pc": {
                  "2.1": {
                    "text": "Determine and oversee implementation of short term technology solutions to achieve reduction of power consumption"
                  },
                  "2.2": {
                    "text": "Initiate and progress sustainable management principles that result in reduced environmental impact "
                  },
                  "2.3": {
                    "text": "Establish, regularly review and improve key performance indicators (KPI) on sustainability performance "
                  },
                  "2.4": {
                    "text": "Incorporate innovative planning and design rules for ICT projects that foster sustainability and environmental best practice"
                  }
                }
              },
              "3": {
                "name": "Analyse energy audit data",
                "pc": {
                  "3.1": {
                    "text": "Identify energy usage within scope of ICT project and provide detailed report"
                  },
                  "3.2": {
                    "text": "Estimate potential energy savings and payback periods for recommended actions"
                  },
                  "3.3": {
                    "text": "Estimate carbon dioxide (CO2) emissions for nominated project"
                  },
                  "3.4": {
                    "text": "Evaluate estimated CO2 emissions with comparable benchmarks"
                  },
                  "3.5": {
                    "text": "Make recommendations in order of priority and give estimates of implementation costs on integration of sustainability for other ICT projects"
                  }
                }
              }
            }
          },
          {
            "name": "Identify and implement business innovation",
            "code": "ICTICT604",
            "EPC": {
              "1": {
                "name": "Compare the business with competitor businesses",
                "pc": {
                  "1.1": {
                    "text": "Investigate information on business markets, customers and methods of doing business"
                  },
                  "1.2": {
                    "text": "Analyse and compare the current market for the business and the customer base with typical business markets and customers"
                  },
                  "1.3": {
                    "text": "Analyse and contrast current business relationships, business processes and methods of doing business with e-facilitated businesses"
                  }
                }
              },
              "2": {
                "name": "Identify business opportunities for innovation and reform",
                "pc": {
                  "2.1": {
                    "text": "Investigate innovation and reform of aspects of the business through business strategies"
                  },
                  "2.2": {
                    "text": "Assess opportunities for their compatibility with business goals and objectives, and conduct a cost-benefit analysis for each"
                  },
                  "2.3": {
                    "text": "Evaluate the degree of likely change and the ramifications for the business and its culture for each opportunity"
                  },
                  "2.4": {
                    "text": "Conduct a risk management analysis and formulate a plan for dealing with contingencies according to organisational requirements"
                  },
                  "2.5": {
                    "text": "Rank opportunities in terms of their viability and applicability to the organisation"
                  },
                  "2.6": {
                    "text": "Include opportunities for innovation in the organisation’s business strategy and prioritise them for implementation"
                  }
                }
              },
              "3": {
                "name": "Implement innovation",
                "pc": {
                  "3.1": {
                    "text": "Redesign aspects of the business in an innovative manner using online technologies according to the organisation’s business strategy"
                  },
                  "3.2": {
                    "text": "Integrate innovation into the business and monitor to gauge usefulness and maximise implementation"
                  },
                  "3.3": {
                    "text": "Review business innovation in consultation with users and make recommendations for improvement or further innovation"
                  }
                }
              }
            }
          },
          {
            "name": "Develop a knowledge management strategy",
            "code": "ICTDBS602",
            "EPC": {
              "1": {
                "name": "Analyse existing knowledge management arrangements",
                "pc": {
                  "1.1": {
                    "text": "Identify existing arrangements for the capture and use of knowledge, and information, from both internal and external sources"
                  },
                  "1.2": {
                    "text": "Distinguish between arrangements for managing knowledge and information management"
                  },
                  "1.3": {
                    "text": "Analyse the importance of knowledge management concepts in the identified organisation"
                  },
                  "1.4": {
                    "text": "Evaluate the effectiveness of existing procedures and systems in meeting the needs of clients, organisational aims, objectives, and standards"
                  },
                  "1.5": {
                    "text": "Identify the improvements in the organisation’s strategic use of knowledge, and prepare a cost-benefit analysis "
                  }
                }
              },
              "2": {
                "name": "Evaluate knowledge management options",
                "pc": {
                  "2.1": {
                    "text": "Investigate the methods for capturing and using knowledge held by people within a business, and identify and evaluate barriers to their use"
                  },
                  "2.2": {
                    "text": "Evaluate knowledge management software and make recommendations regarding its usefulness, and likely benefit, to the organisation "
                  },
                  "2.3": {
                    "text": "Investigate incentives and reward systems to support knowledge management for their relevance to a business"
                  },
                  "2.4": {
                    "text": "Determine non-technical business requirements for maintaining and accessing an integrated knowledge database, according to organisational requirements"
                  }
                }
              },
              "3": {
                "name": "Develop a knowledge-management strategy",
                "pc": {
                  "3.1": {
                    "text": "Develop a knowledge management strategy in consultation with staff for the capture and strategic use of organisational knowledge"
                  },
                  "3.2": {
                    "text": "Design business processes to support knowledge management, according to the organisation’s knowledge management strategy, and budget"
                  },
                  "3.3": {
                    "text": "Plan an executive support system as part of the knowledge management strategy, to improve managerial decision-making according to organisational requirements"
                  },
                  "3.4": {
                    "text": "Cost the technology requirements for the implementation of the strategy, and include this costing in knowledge management budgeting"
                  },
                  "3.5": {
                    "text": "Design, or redesign, processes for a periodic review of knowledge management within the business in order to ensure ongoing efficiency and effectiveness"
                  },
                  "3.6": {
                    "text": "Ensure that the knowledge management strategy meets the organisational requirements identified in its overall business plan, and knowledge management strategy"
                  }
                }
              }
            }
          },
          {
            "name": "Implement a knowledge management strategy",
            "code": "ICTICT605",
            "EPC": {
              "1": {
                "name": "Implement knowledge management system and procedures",
                "pc": {
                  "1.1": {
                    "text": "Foster a culture of sharing knowledge within the business through a system of formal and informal incentives and rewards"
                  },
                  "1.2": {
                    "text": "Implement policy and procedures for capturing knowledge within the organisation according to the business knowledge management strategy, and integrate this knowledge into existing business processes to change the enterprise processes"
                  },
                  "1.3": {
                    "text": "Model methods of contributing to the organisation’s knowledge management system, and provide learning and development opportunities for staff to assist them to contribute and provide feedback"
                  },
                  "1.4": {
                    "text": "Provide coaching, mentoring and ongoing support to staff in accessing and using the organisation’s knowledge management system according to the business knowledge management strategy"
                  },
                  "1.5": {
                    "text": "Manage protection and security of knowledge or information and levels of access according to organisational requirements"
                  }
                }
              },
              "2": {
                "name": "Maintain business knowledge base",
                "pc": {
                  "2.1": {
                    "text": "Monitor input procedures to ensure that sources are tapped and knowledge is captured according to the business knowledge management strategy, and to ensure the effectiveness of accurate data capture"
                  },
                  "2.2": {
                    "text": "Collect and analyse data on access and use of the knowledge management system to determine the organisation’s strategic use of knowledge"
                  },
                  "2.3": {
                    "text": "Implement contingency measures to address shortfalls in the knowledge management system and procedures, according to level of responsibility and authority"
                  }
                }
              },
              "3": {
                "name": "Review knowledge management system and procedures",
                "pc": {
                  "3.1": {
                    "text": "Evaluate the knowledge management system and procedures to ensure they meet the needs of clients, organisational aims, objectives and standards "
                  },
                  "3.2": {
                    "text": "Periodically review the organisational knowledge content\nfor accuracy and currency to ensure that it remains in line with\norganisational requirements"
                  },
                  "3.3": {
                    "text": "Identify improvements to the system and to the organisation’s strategic use of knowledge in consultation with users, and prepare a cost-benefit analysis with recommendations"
                  }
                }
              }
            }
          },
          {
            "name": "Manage security, privacy and compliance of cloud service",
            "code": "ICTNWK616",
            "EPC": {
              "1": {
                "name": "Manage enterprise cloud security controls",
                "pc": {
                  "1.1": {
                    "text": "Identify the cloud security issues faced by different delivery and deployment models relevant to the enterprise"
                  },
                  "1.2": {
                    "text": "Determine the specific enterprise areas of security responsibility"
                  },
                  "1.3": {
                    "text": "Implement the most relevant security controls and measures, to protect identified areas of responsibility"
                  }
                }
              },
              "2": {
                "name": "Manage enterprise cloud privacy and compliance",
                "pc": {
                  "2.1": {
                    "text": "Identify the relevant compliance regulations relating to data storage"
                  },
                  "2.2": {
                    "text": "Determine the most relevant business continuity and data recovery plans"
                  },
                  "2.3": {
                    "text": "Identify, secure and maintain, the relevant logs and audit trails"
                  },
                  "2.4": {
                    "text": "Investigate and review legal, privacy and contractual issues to ensure that they meet the enterprise policy"
                  }
                }
              },
              "3": {
                "name": "Review, implement and document cloud security, privacy and compliance enhancements",
                "pc": {
                  "3.1": {
                    "text": "Implement the appropriate changes, and integrate them into the current enterprise’s continuity of operation program (COOP)"
                  },
                  "3.2": {
                    "text": "Establish a performance measurement program, to evaluate the security effectiveness of implemented security controls"
                  },
                  "3.3": {
                    "text": "Provide relevant documentation as part of COOP, for audit tracking purposes"
                  }
                }
              }
            }
          },
          {
            "name": "Build a data warehouse",
            "code": "ICTDBS601",
            "EPC": {
              "1": {
                "name": "Confirm the database design",
                "pc": {
                  "1.1": {
                    "text": "Review the database design document, including the data structures, queries, reports and user interface"
                  },
                  "1.2": {
                    "text": "Identify any possible “Big Data” applications"
                  },
                  "1.3": {
                    "text": "Compare the database access and security design, with the business security plan"
                  }
                }
              },
              "2": {
                "name": "Identify the required data and sources",
                "pc": {
                  "2.1": {
                    "text": "Identify the required data, with reference to the enterprise’s knowledge management strategy"
                  },
                  "2.2": {
                    "text": "Identify subject areas, with reference to the business processes and the required data"
                  },
                  "2.3": {
                    "text": "Explore operational data, define the warehouse sources and record the outcomes"
                  },
                  "2.4": {
                    "text": "Develop the warehouse source specifications, with reference to the existing data tables and files"
                  }
                }
              },
              "3": {
                "name": "Determine warehouse operational steps and processes",
                "pc": {
                  "3.1": {
                    "text": "Develop the warehouse targets, with reference to the business processes and the required data"
                  },
                  "3.2": {
                    "text": "Identify the warehouse agents, according to the system’s configuration"
                  },
                  "3.3": {
                    "text": "Identify and develop, warehouse steps and processes"
                  }
                }
              },
              "4": {
                "name": "Design and develop the warehouse features",
                "pc": {
                  "4.1": {
                    "text": "Design and develop the warehouse user interface, with reference to the principles of user interface design"
                  },
                  "4.2": {
                    "text": "Develop and implement the warehouse security strategy, according to the enterprise’s security plan"
                  },
                  "4.3": {
                    "text": "Identify dimension tables and fact tables, with reference to the required data"
                  },
                  "4.4": {
                    "text": "Cost the technology requirements for the implementation of the warehouse security strategy, and include them in e-business budgeting"
                  },
                  "4.5": {
                    "text": "Develop a warehouse information catalogue, with reference to the enterprise’s knowledge management strategy"
                  }
                }
              },
              "5": {
                "name": "Test and implement the data warehouse",
                "pc": {
                  "5.1": {
                    "text": "Test the data warehouse against the business requirements, to ensure that iterations meet the business objectives"
                  },
                  "5.2": {
                    "text": "Recommend changes to business processes, to ensure compatibility with the data warehouse and the knowledge management strategy"
                  },
                  "5.3": {
                    "text": "Implement the data warehouse"
                  },
                  "5.4": {
                    "text": "Establish an ongoing maintenance schedule in order to keep the system efficient"
                  },
                  "5.5": {
                    "text": "Benchmark and document, the performance level of the data\nwarehouse"
                  }
                }
              },
              "6": {
                "name": "Finalise work processes",
                "pc": {
                  "6.1": {
                    "text": "Arrange for users to have ongoing training in the data warehouse"
                  },
                  "6.2": {
                    "text": "Validate the results "
                  },
                  "6.3": {
                    "text": "Obtain sign-off for the data warehouse"
                  }
                }
              }
            }
          },
          {
            "name": "Monitor and improve knowledge management system",
            "code": "ICTDBS501",
            "EPC": {
              "1": {
                "name": "Investigate the knowledge management system",
                "pc": {
                  "1.1": {
                    "text": "Review the structure of the existing knowledge management system, and develop an understanding of its operation"
                  },
                  "1.2": {
                    "text": "Interview the client and staff to determine information requirements"
                  },
                  "1.3": {
                    "text": "Identify frequently requested information"
                  },
                  "1.4": {
                    "text": "Identify frequently requested information"
                  },
                  "1.5": {
                    "text": "Document the structure and forward to the appropriate person for approval"
                  }
                }
              },
              "2": {
                "name": "Create a knowledge management system",
                "pc": {
                  "2.1": {
                    "text": "Retrieve the identified information"
                  },
                  "2.2": {
                    "text": "Organise information to follow the approved structure"
                  },
                  "2.3": {
                    "text": "Document the information structure"
                  }
                }
              },
              "3": {
                "name": "Distribute and monitor knowledge management system documentation",
                "pc": {
                  "3.1": {
                    "text": "Distribute knowledge management system documentation\nto the client and staff"
                  },
                  "3.2": {
                    "text": "Gather feedback from the client and staff, and incorporate\ninto improving systems and processes"
                  },
                  "3.3": {
                    "text": "Monitor the use of the knowledge management system to\ndetermine its effectiveness "
                  },
                  "3.4": {
                    "text": "Make changes to the knowledge management system "
                  },
                  "3.5": {
                    "text": "Make knowledge management system documentation\navailable"
                  },
                  "3.6": {
                    "text": "Implement and monitor process improvements"
                  }
                }
              }
            }
          }
        ]
      };
    };

    priv.set_course_details = function() {
      $('#course-name').text(pub.data.name + ' (' + pub.data.code + ')');
    };

    priv.set_unit_sub_lessons = function(subLessons, unitId){
      for(var idx in subLessons) {
        var newContent = `<li>${idx}) ${subLessons[idx].text}</li>`;

        $('#'+unitId + ' ul').append(newContent);
      }
    }

    priv.set_unit_lessons = function(unitLessons, unitId) {
      for(var idx in unitLessons) {
        var subContent = priv.subUnitTmpl.replace('%subUnitName%', unitLessons[idx].name).replace('%subUnitId%', idx)

        $('#'+unitId + ' .subUnit').append(subContent);
        priv.set_unit_sub_lessons(unitLessons[idx].pc, unitId);
      }
    }

    priv.set_course_units = function() {
      for(var idx in pub.data.units) {
        var unitId = parseInt(idx)+1;
        var content = priv.unitTmpl.replace(/%unitId%/g, unitId).replace('%unitCode%', pub.data.units[idx].code).replace('%unitName%', pub.data.units[idx].name);
        $('section').append(content);

        priv.set_unit_lessons(pub.data.units[idx].EPC, unitId);
      }
    };

    pub.start = function() {
      priv.get_json();
      priv.set_course_details();
      priv.set_course_units();

      setTimeout(function() {
        $('input').on('keydown', function(e){if (e.keyCode == 9)  e.preventDefault() });
      }, 400);
    };

    return pub;
  }()
};

Cti.adv_diploma_it.classes.start();
