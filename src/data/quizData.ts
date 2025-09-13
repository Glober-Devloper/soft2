export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizData {
  title: string;
  questions: QuizQuestion[];
}

export const getQuizData = (unit: string): QuizData | null => {
  const quizMap: { [key: string]: QuizData } = {
    unit1: {
      title: "Software Engineering Concepts Quiz",
      questions: [
        {
          question: "What are the three main components of software?",
          options: [
            "Hardware, Software, and Network",
            "Programs, Documentation, and Data",
            "Input, Process, and Output",
            "Analysis, Design, and Implementation"
          ],
          correctAnswer: 1,
          explanation: "Software consists of three main components: Programs (executable code), Documentation (user manuals, technical specs), and Data (databases, configuration files)."
        },
        {
          question: "Which characteristic distinguishes software from hardware?",
          options: [
            "Software is manufactured in factories",
            "Software deteriorates over time",
            "Software is intangible and logical",
            "Software cannot be copied"
          ],
          correctAnswer: 2,
          explanation: "Software is intangible - it exists as logical constructs, code, and data structures that cannot be physically touched, unlike hardware."
        },
        {
          question: "What was the primary cause of the Software Crisis in the 1960s?",
          options: [
            "Lack of powerful computers",
            "No systematic approach to software development",
            "Insufficient programming languages",
            "Limited storage capacity"
          ],
          correctAnswer: 1,
          explanation: "The Software Crisis was primarily caused by the lack of systematic approaches to software development, leading to projects being over budget, behind schedule, and not meeting requirements."
        },
        {
          question: "In the Waterfall model, when can you move to the next phase?",
          options: [
            "At any time during development",
            "Only after the current phase is completed",
            "When the client requests it",
            "After testing is finished"
          ],
          correctAnswer: 1,
          explanation: "The Waterfall model is linear and sequential - each phase must be completed before moving to the next phase."
        },
        {
          question: "Which SDLC model is best for projects with unclear requirements?",
          options: [
            "Waterfall Model",
            "Spiral Model",
            "Prototype Model",
            "V Model"
          ],
          correctAnswer: 2,
          explanation: "The Prototype model is best for projects with unclear requirements as it allows building working models to clarify and refine requirements."
        },
        {
          question: "What does RAD stand for in software development?",
          options: [
            "Rapid Application Development",
            "Required Analysis Document",
            "Reactive Application Design",
            "Resource Allocation Diagram"
          ],
          correctAnswer: 0,
          explanation: "RAD stands for Rapid Application Development - a methodology emphasizing rapid prototyping and quick feedback over long development cycles."
        },
        {
          question: "Which Agile principle emphasizes adapting to change?",
          options: [
            "Processes and tools over individuals",
            "Comprehensive documentation over working software",
            "Contract negotiation over customer collaboration",
            "Responding to change over following a plan"
          ],
          correctAnswer: 3,
          explanation: "One of the core Agile principles is 'Responding to change over following a plan' - emphasizing adaptability and flexibility."
        },
        {
          question: "What is the main characteristic of the Spiral model?",
          options: [
            "Linear progression through phases",
            "Risk-driven iterative development",
            "Focus on rapid prototyping",
            "Emphasis on documentation"
          ],
          correctAnswer: 1,
          explanation: "The Spiral model is characterized by risk-driven iterative development, with repeated cycles of planning, risk analysis, engineering, and evaluation."
        },
        {
          question: "Lines of Code (LOC) metric is criticized because it:",
          options: [
            "Cannot be measured accurately",
            "Is language dependent and doesn't reflect functionality",
            "Is too complex to calculate",
            "Only works for small projects"
          ],
          correctAnswer: 1,
          explanation: "LOC is criticized because it's language dependent (assembly vs. high-level languages) and doesn't reflect the actual functionality or complexity of the software."
        },
        {
          question: "Function Points measure software size based on:",
          options: [
            "Number of lines of code",
            "Functionality provided to the user",
            "Number of classes and methods",
            "Database size"
          ],
          correctAnswer: 1,
          explanation: "Function Points measure software size based on the functionality provided to the user, independent of programming language or implementation technology."
        },
        {
          question: "In the Delphi estimation method, what ensures unbiased estimates?",
          options: [
            "Using the same expert for all estimates",
            "Anonymous rounds of estimation",
            "Limiting discussion time",
            "Using automated tools"
          ],
          correctAnswer: 1,
          explanation: "The Delphi method ensures unbiased estimates through anonymous rounds where experts provide individual estimates without knowing others' opinions."
        },
        {
          question: "COCOMO stands for:",
          options: [
            "Constructive Cost Model",
            "Computer Cost Management Operations",
            "Code Complexity Measurement Object",
            "Comprehensive Cost Monitoring"
          ],
          correctAnswer: 0,
          explanation: "COCOMO stands for Constructive Cost Model - an algorithmic cost estimation model developed by Barry Boehm."
        }
      ]
    },
    unit2: {
      title: "Requirements Analysis and Specification Quiz",
      questions: [
        {
          question: "What is the primary purpose of an SRS document?",
          options: [
            "To provide coding guidelines",
            "To serve as a contract between developers and clients",
            "To document testing procedures",
            "To specify hardware requirements"
          ],
          correctAnswer: 1,
          explanation: "The SRS serves as a contract between the development team and the client, ensuring everyone has the same understanding of what will be built."
        },
        {
          question: "A good SRS should be:",
          options: [
            "Ambiguous to allow flexibility",
            "Complete, consistent, and unambiguous",
            "Written only by developers",
            "Changed frequently during development"
          ],
          correctAnswer: 1,
          explanation: "A good SRS should be complete (all requirements included), consistent (no contradictions), and unambiguous (single interpretation)."
        },
        {
          question: "Which is an example of a good requirement statement?",
          options: [
            "The system should be fast",
            "The system should be user-friendly",
            "The system shall respond within 2 seconds",
            "The system should work well"
          ],
          correctAnswer: 2,
          explanation: "Good requirements are specific and measurable. 'The system shall respond within 2 seconds' is verifiable, unlike vague terms like 'fast' or 'user-friendly'."
        },
        {
          question: "The most challenging part of requirements engineering is often:",
          options: [
            "Documentation",
            "Validation",
            "Elicitation",
            "Management"
          ],
          correctAnswer: 2,
          explanation: "Requirements elicitation is often the most challenging because stakeholders may not know what they want, have conflicting needs, or cannot articulate their requirements clearly."
        },
        {
          question: "Which technique involves watching users in their natural work environment?",
          options: [
            "Interviews",
            "Observation",
            "Brainstorming",
            "Questionnaires"
          ],
          correctAnswer: 1,
          explanation: "Observation involves watching users in their natural work environment to understand their actual work practices and needs."
        },
        {
          question: "The MoSCoW method is used for:",
          options: [
            "Cost estimation",
            "Risk analysis",
            "Requirements prioritization",
            "Testing strategy"
          ],
          correctAnswer: 2,
          explanation: "MoSCoW (Must have, Should have, Could have, Won't have) is a technique used for prioritizing requirements."
        },
        {
          question: "What does a Data Flow Diagram (DFD) show?",
          options: [
            "Database structure",
            "Program control flow",
            "How data moves through a system",
            "User interface design"
          ],
          correctAnswer: 2,
          explanation: "DFDs show how data moves through a system, focusing on data flow and transformation rather than control flow."
        },
        {
          question: "In DFD notation, processes are represented by:",
          options: [
            "Rectangles",
            "Circles or bubbles",
            "Arrows",
            "Open rectangles"
          ],
          correctAnswer: 1,
          explanation: "In DFD notation, processes are represented by circles or bubbles, showing data transformation activities."
        },
        {
          question: "Entity Relationship Diagrams (ERD) primarily model:",
          options: [
            "Program flow",
            "Data structure and relationships",
            "User interface",
            "System architecture"
          ],
          correctAnswer: 1,
          explanation: "ERDs model the data structure and relationships between entities in a system, forming the foundation for database design."
        },
        {
          question: "A one-to-many relationship in ERD means:",
          options: [
            "Each instance relates to exactly one instance",
            "One instance relates to many instances",
            "Many instances relate to many instances",
            "No relationship exists"
          ],
          correctAnswer: 1,
          explanation: "A one-to-many (1:N) relationship means one instance of an entity relates to many instances of another entity."
        },
        {
          question: "Decision tables are best used for:",
          options: [
            "Data modeling",
            "Process modeling",
            "Complex business rules",
            "User interface design"
          ],
          correctAnswer: 2,
          explanation: "Decision tables are structured methods for documenting complex business rules and decision logic, showing all possible combinations of conditions and actions."
        },
        {
          question: "Technical feasibility assesses:",
          options: [
            "Whether the system is financially viable",
            "Whether the system can be built with available technology",
            "Whether users will accept the system",
            "Whether the system can be delivered on time"
          ],
          correctAnswer: 1,
          explanation: "Technical feasibility assesses whether the system can be built with available technology, expertise, and resources."
        }
      ]
    },
    unit3: {
      title: "Software Design Quiz",
      questions: [
        {
          question: "What is the main goal of software design?",
          options: [
            "To write code faster",
            "To transform requirements into implementation blueprint",
            "To reduce development cost",
            "To eliminate all bugs"
          ],
          correctAnswer: 1,
          explanation: "Software design transforms requirements into a detailed blueprint for implementing the software system, bridging the gap between analysis and coding."
        },
        {
          question: "Function-oriented design uses which approach?",
          options: [
            "Bottom-up decomposition",
            "Top-down decomposition",
            "Random decomposition",
            "Object-oriented decomposition"
          ],
          correctAnswer: 1,
          explanation: "Function-oriented design uses top-down decomposition, breaking complex functions into simpler sub-functions hierarchically."
        },
        {
          question: "Which is NOT a principle of object-oriented design?",
          options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Decomposition"
          ],
          correctAnswer: 3,
          explanation: "Decomposition is a principle of function-oriented design. The main OOP principles are encapsulation, inheritance, polymorphism, and abstraction."
        },
        {
          question: "High cohesion means:",
          options: [
            "Strong connections between different modules",
            "Elements within a module are closely related",
            "Many dependencies between modules",
            "Complex module interfaces"
          ],
          correctAnswer: 1,
          explanation: "High cohesion means elements within a single module are closely related and work together toward a single, well-defined purpose."
        },
        {
          question: "Which type of cohesion is considered the best?",
          options: [
            "Logical cohesion",
            "Temporal cohesion",
            "Functional cohesion",
            "Coincidental cohesion"
          ],
          correctAnswer: 2,
          explanation: "Functional cohesion is the best type where all elements contribute to a single, well-defined task - easiest to understand, test, and maintain."
        },
        {
          question: "Low coupling between modules means:",
          options: [
            "Modules share many global variables",
            "Modules are relatively independent",
            "One module controls another's behavior",
            "Modules access each other's internal data"
          ],
          correctAnswer: 1,
          explanation: "Low coupling means modules are relatively independent, with minimal interdependencies, making them easier to maintain and modify."
        },
        {
          question: "Which type of coupling is considered worst?",
          options: [
            "Data coupling",
            "Stamp coupling",
            "Content coupling",
            "Control coupling"
          ],
          correctAnswer: 2,
          explanation: "Content coupling is the worst type where one module modifies or relies on internal workings of another, violating encapsulation principles."
        },
        {
          question: "Data coupling involves:",
          options: [
            "Sharing global variables",
            "Passing control flags",
            "Communicating through parameters",
            "Modifying another module's code"
          ],
          correctAnswer: 2,
          explanation: "Data coupling involves modules communicating through parameters, passing only necessary data - this is the most desirable type of coupling."
        },
        {
          question: "Why is UI design important in software development?",
          options: [
            "It makes the code run faster",
            "It's the primary user touchpoint with software",
            "It reduces memory usage",
            "It improves database performance"
          ],
          correctAnswer: 1,
          explanation: "UI design is important because the interface is often the only part of the system users see and interact with - poor UI can make powerful software unusable."
        },
        {
          question: "Which UI design principle focuses on similar actions working similarly?",
          options: [
            "Feedback",
            "Consistency",
            "Efficiency",
            "Error prevention"
          ],
          correctAnswer: 1,
          explanation: "Consistency principle ensures similar actions work similarly, with consistent visual and functional patterns throughout the interface."
        },
        {
          question: "User-centered design means:",
          options: [
            "Designers make all decisions",
            "Focus on user needs and involve users throughout design",
            "Users design the interface themselves",
            "Design is based on technical constraints only"
          ],
          correctAnswer: 1,
          explanation: "User-centered design focuses on user needs and goals, involving users throughout the design process and basing decisions on user research."
        },
        {
          question: "Which is NOT a typical phase in the UI design process?",
          options: [
            "User research",
            "Prototyping",
            "Database optimization",
            "Usability testing"
          ],
          correctAnswer: 2,
          explanation: "Database optimization is not part of the UI design process. UI design phases include user research, conceptual design, prototyping, and usability testing."
        }
      ]
    },
    unit4: {
      title: "Coding and Testing Quiz",
      questions: [
        {
          question: "Why are coding standards important?",
          options: [
            "They make code run faster",
            "They ensure consistency and readability",
            "They reduce memory usage",
            "They eliminate all bugs"
          ],
          correctAnswer: 1,
          explanation: "Coding standards ensure consistency, readability, and maintainability across a software project, especially in team environments."
        },
        {
          question: "Which is an example of good naming convention for a boolean variable?",
          options: [
            "flag",
            "data",
            "isValid",
            "temp"
          ],
          correctAnswer: 2,
          explanation: "Boolean variables should use question words like 'isValid', 'hasPermission', or 'canEdit' to clearly indicate they return true/false."
        },
        {
          question: "What should inline comments primarily explain?",
          options: [
            "What the code does",
            "Why the code is written this way",
            "How to compile the code",
            "Who wrote the code"
          ],
          correctAnswer: 1,
          explanation: "Inline comments should primarily explain 'why' - the reasoning behind complex logic or business rules, not what the code obviously does."
        },
        {
          question: "The primary goal of software testing is to:",
          options: [
            "Prove the software has no bugs",
            "Find defects and ensure quality",
            "Speed up development",
            "Reduce coding time"
          ],
          correctAnswer: 1,
          explanation: "The primary goal of testing is to find defects, ensure quality, and build confidence in the software's reliability - testing cannot prove absence of bugs."
        },
        {
          question: "Unit testing typically:",
          options: [
            "Tests the entire system",
            "Tests individual components in isolation",
            "Tests user interfaces only",
            "Tests database connections"
          ],
          correctAnswer: 1,
          explanation: "Unit testing tests individual components or modules in isolation, typically using mocks or stubs for external dependencies."
        },
        {
          question: "The AAA pattern in unit testing stands for:",
          options: [
            "Assess, Act, Analyze",
            "Arrange, Act, Assert",
            "Accept, Approve, Acknowledge",
            "Allocate, Activate, Archive"
          ],
          correctAnswer: 1,
          explanation: "AAA stands for Arrange (set up test data), Act (execute the functionality), Assert (verify the results)."
        },
        {
          question: "Black box testing focuses on:",
          options: [
            "Code structure and implementation",
            "Inputs and expected outputs without code knowledge",
            "Database design",
            "Performance optimization"
          ],
          correctAnswer: 1,
          explanation: "Black box testing examines functionality based on inputs and expected outputs without knowledge of internal code structure."
        },
        {
          question: "Boundary value analysis tests:",
          options: [
            "Random input values",
            "Values at the boundaries of input domains",
            "Only valid input values",
            "Database constraints"
          ],
          correctAnswer: 1,
          explanation: "Boundary value analysis tests values at the boundaries of input domains, as errors often occur at boundary conditions."
        },
        {
          question: "White box testing requires:",
          options: [
            "No knowledge of code structure",
            "Knowledge of code structure and implementation",
            "Only user interface access",
            "Database administrator privileges"
          ],
          correctAnswer: 1,
          explanation: "White box testing requires full knowledge of code structure, logic, and implementation details to design test cases."
        },
        {
          question: "Statement coverage in white box testing means:",
          options: [
            "All functions are called",
            "Every statement is executed at least once",
            "All branches are taken",
            "All paths are executed"
          ],
          correctAnswer: 1,
          explanation: "Statement coverage means every statement in the code is executed at least once during testing."
        },
        {
          question: "System testing evaluates:",
          options: [
            "Individual modules only",
            "The complete integrated software system",
            "Code quality only",
            "Database performance only"
          ],
          correctAnswer: 1,
          explanation: "System testing evaluates the complete integrated software system to verify it meets specified requirements in a production-like environment."
        },
        {
          question: "The first step in debugging should be:",
          options: [
            "Fix the problem immediately",
            "Reproduce the problem consistently",
            "Rewrite the code",
            "Ask for help"
          ],
          correctAnswer: 1,
          explanation: "The first step in debugging should be to reproduce the problem consistently, documenting exact steps and conditions needed."
        }
      ]
    },
    unit5: {
      title: "Software Maintenance Quiz",
      questions: [
        {
          question: "What percentage of software lifecycle cost is typically spent on maintenance?",
          options: [
            "20-30%",
            "40-50%",
            "60-80%",
            "90-95%"
          ],
          correctAnswer: 2,
          explanation: "Software maintenance typically consumes 60-80% of the total software lifecycle cost, making it the most expensive phase."
        },
        {
          question: "Which type of maintenance fixes bugs discovered after deployment?",
          options: [
            "Adaptive maintenance",
            "Perfective maintenance",
            "Corrective maintenance",
            "Preventive maintenance"
          ],
          correctAnswer: 2,
          explanation: "Corrective maintenance fixes defects and errors discovered after deployment, typically accounting for 20-25% of maintenance effort."
        },
        {
          question: "Adaptive maintenance is performed to:",
          options: [
            "Fix bugs in the system",
            "Add new features",
            "Adapt to environmental changes",
            "Improve code structure"
          ],
          correctAnswer: 2,
          explanation: "Adaptive maintenance adapts software to changes in the environment such as OS upgrades, database migrations, or new hardware."
        },
        {
          question: "Which type of maintenance typically requires the most effort?",
          options: [
            "Corrective maintenance",
            "Adaptive maintenance", 
            "Perfective maintenance",
            "Preventive maintenance"
          ],
          correctAnswer: 2,
          explanation: "Perfective maintenance typically requires 50-55% of maintenance effort, focusing on improvements and new features."
        },
        {
          question: "Reverse engineering is the process of:",
          options: [
            "Writing code backwards",
            "Analyzing software to extract design information",
            "Fixing bugs in reverse order",
            "Undoing software changes"
          ],
          correctAnswer: 1,
          explanation: "Reverse engineering analyzes existing software to extract design and implementation information, working backwards from code to understand structure."
        },
        {
          question: "Why is reverse engineering often needed?",
          options: [
            "To make software run faster",
            "When documentation is missing or outdated",
            "To reduce memory usage",
            "To change programming languages"
          ],
          correctAnswer: 1,
          explanation: "Reverse engineering is often needed when original design documents are missing, outdated, or don't reflect the current system state."
        },
        {
          question: "Static analysis in reverse engineering involves:",
          options: [
            "Running the software and observing behavior",
            "Examining code without executing it",
            "Testing user interfaces",
            "Measuring performance"
          ],
          correctAnswer: 1,
          explanation: "Static analysis examines source code structure, dependencies, and control flow without executing the software."
        },
        {
          question: "Which factor does NOT significantly affect maintenance cost?",
          options: [
            "System size and complexity",
            "Code quality",
            "Team experience",
            "Original development cost"
          ],
          correctAnswer: 3,
          explanation: "Original development cost doesn't significantly affect ongoing maintenance cost. System characteristics, quality, and team factors are more important."
        },
        {
          question: "In COCOMO II maintenance model, what does ACT stand for?",
          options: [
            "Annual Cost Total",
            "Annual Change Traffic",
            "Automated Code Testing",
            "Advanced Complexity Technique"
          ],
          correctAnswer: 1,
          explanation: "ACT stands for Annual Change Traffic - the fraction of software that changes per year in the COCOMO II maintenance model."
        },
        {
          question: "The Software Understanding (SU) factor in COCOMO II ranges from:",
          options: [
            "0.5 to 2.0",
            "1.0 to 1.5", 
            "0.1 to 1.0",
            "2.0 to 5.0"
          ],
          correctAnswer: 1,
          explanation: "The Software Understanding factor ranges from 1.0 (very high understanding) to 1.5 (low understanding) based on documentation and team knowledge."
        },
        {
          question: "Which maintenance cost estimation model is based on software evolution laws?",
          options: [
            "Boehm's model",
            "COCOMO II model",
            "Belady and Lehman model",
            "Function Point model"
          ],
          correctAnswer: 2,
          explanation: "The Belady and Lehman model is based on software evolution laws and uses exponential growth to model maintenance effort over time."
        },
        {
          question: "The best strategy for controlling maintenance costs is:",
          options: [
            "Avoiding all changes",
            "Using only experienced developers",
            "Investing in code quality and maintainability",
            "Outsourcing all maintenance"
          ],
          correctAnswer: 2,
          explanation: "Investing in code quality and maintainability during initial development and ongoing maintenance provides the best long-term cost control."
        }
      ]
    }
  };

  return quizMap[unit] || null;
};