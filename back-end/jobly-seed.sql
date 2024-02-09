-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email, is_admin, resume, resume_title)
VALUES ('testuser',
        '$2b$04$7sExi3X7H/VbKQM82QbKne9rgUkNUCrQ8vB6oZfqkJjn8Dtp43G82',
        'Test',
        'User',
        'email@email.com',
        FALSE,
        NULL,
        NULL),
       ('testadmin',
        '$2b$04$7sExi3X7H/VbKQM82QbKne9rgUkNUCrQ8vB6oZfqkJjn8Dtp43G82',
        'Test',
        'Admin!',
        'email@email.com',
        TRUE,
        NULL,
        NULL);

INSERT INTO companies (handle,
                       name,
                       num_employees,
                       description,
                       logo_url)
VALUES ('bauer-gallagher', 'Bauer-Gallagher', 862,
        'Difficult ready trip question produce produce someone.', NULL),
       ('edwards-lee-reese', 'Edwards, Lee and Reese', 744,
        'To much recent it reality coach decision Mr. Dog language evidence minute either deep situation pattern. Other cold bad loss surface real show.',
        '/logos/logo2.png'),
       ('hall-davis', 'Hall-Davis', 749,
        'Adult go economic off into. Suddenly happy according only common. Father plant wrong free traditional.',
        '/logos/logo2.png'),
       ('watson-davis', 'Watson-Davis', 819, 'Year join loss.',
        '/logos/logo3.png'),
       ('baker-santos', 'Baker-Santos', 225,
        'Compare certain use. Writer time lay word garden. Resource task interesting voice.',
        '/logos/logo3.png'),
       ('erickson-inc', 'Erickson Inc', 267,
        'Interesting environment owner beautiful school politics. General friend hair player dinner last administration teacher.',
        '/logos/logo4.png'),
       ('norman-harvey', 'Norman-Harvey', NULL,
        'Drop along test material education. Opportunity forget campaign federal certainly total hair.',
        '/logos/logo4.png'),
       ('boyd-evans', 'Boyd-Evans', 698,
        'Build respond generation tree. No five keep. Happy medical back fine focus suffer modern.',
        '/logos/logo4.png'),
       ('mitchell-brown', 'Mitchell-Brown', 288,
        'Republican truth church generation voice price issue.',
        '/logos/logo1.png'),
       ('russo-gillespie-conrad', 'Russo, Gillespie and Conrad', 398,
        'South sound knowledge guy. Up I size anyone issue drop. Agent light significant mouth while.',
        '/logos/logo2.png'),
       ('ingram-ferguson-rubio', 'Ingram, Ferguson and Rubio', 753,
        'Human summer field mean impact could exactly. Business read north project will. Left dream use Democrat.',
        '/logos/logo3.png'),
       ('anderson-arias-morrow', 'Anderson, Arias and Morrow', 245,
        'Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.',
        '/logos/logo3.png'),
       ('jackson-sons', 'Jackson and Sons', 649,
        'President couple political sit create.', '/logos/logo4.png'),
       ('miller-woods-hernandez', 'Miller, Woods and Hernandez', 444,
        'Including theory protect reveal energy himself probably. Test leave mother area however.',
        '/logos/logo4.png'),
       ('arnold-berger-townsend', 'Arnold, Berger and Townsend', 795,
        'Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.',
        NULL),
       ('davis-davis', 'Davis-Davis', 23,
        'Career participant difficult. Decide claim particular century society. Question growth two staff.',
        NULL),
       ('smith-llc', 'Smith LLC', 908,
        'Statement use per mission method. Order truth method.', NULL),
       ('morgan-sullivan', 'Morgan-Sullivan', 409,
        'Own once artist part put authority wait. Focus free even. Why friend civil visit.',
        NULL),
       ('taylor-yu-lee', 'Taylor, Yu and Lee', 226,
        'Down bag serve. Officer season company.', '/logos/logo2.png'),
       ('scott-smith', 'Scott-Smith', 993,
        'Room newspaper foot. Student daughter their themselves top almost near. Wait time recently it street follow medical nothing.',
        '/logos/logo2.png'),
       ('garcia-ray', 'Garcia-Ray', 217,
        'Laugh low follow fear. Politics main size fine.', '/logos/logo2.png'),
       ('logan-miller', 'Logan-Miller', 429,
        'Pattern hand where never. Social across ability which structure.',
        NULL),
       ('hudson-inc', 'Hudson Inc', 627,
        'End now meet staff. Long government force why bar. Provide bring hope staff almost many be a.',
        NULL),
       ('rivas-llc', 'Rivas LLC', 552,
        'Would road lot research wide mouth. Resource along office drug.',
        NULL),
       ('garner-michael', 'Garner-Michael', 940,
        'Necessary thousand parent since discuss director. Visit machine skill five the.',
        NULL),
       ('owen-newton', 'Owen-Newton', 953,
        'Red compare try way. Bed standard again number wrong force. Stop exactly agent product economy someone. North describe site manager employee customer.',
        NULL),
       ('foster-rice', 'Foster-Rice', 901,
        'Either relate himself. Source TV data one general. Actually than seat eight.',
        NULL),
       ('moore-plc', 'Moore PLC', 100,
        'Magazine thing eight shake window might they organization. Environmental it bag green.',
        NULL),
       ('ayala-buchanan', 'Ayala-Buchanan', 309,
        'Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.',
        NULL),
       ('willis-henson-miller', 'Willis, Henson and Miller', 821,
        'About dream practice. Father significant senior health within four.',
        NULL),
       ('stone-stewart', 'Stone-Stewart', 459,
        'Require successful family but. Traditional article late eight lose common send budget. Better opportunity law country various represent strong probably.',
        NULL),
       ('wiggins-frederick-boyer', 'Wiggins, Frederick and Boyer', 298,
        'Institution structure say argue bit. Each option high executive easy pattern. Majority white hour there reach drive produce.',
        '/logos/logo2.png'),
       ('reynolds-greene', 'Reynolds-Greene', 343,
        'Effect win area officer office economy. Congress travel would resource difficult. Nice president mind dinner.',
        '/logos/logo2.png'),
       ('perez-miller', 'Perez-Miller', 298,
        'Space one approach wife son. Themselves give necessary follow employee return feel. Step animal doctor sign water early.',
        '/logos/logo4.png'),
       ('burton-ltd', 'Burton Ltd', 610,
        'Cover couple speech bar cell measure movement finally. Nation pull inside.',
        '/logos/logo4.png'),
       ('gillespie-smith', 'Gillespie-Smith', 302,
        'Candidate ability democratic make drug. Player themselves like front. Over through style loss win very when.',
        '/logos/logo1.png'),
       ('martinez-daniels', 'Martinez-Daniels', 12,
        'Five source market nation. Drop foreign raise pass.',
        '/logos/logo4.png'),
       ('jackson-davila-conley', 'Jackson, Davila and Conley', 813,
        'Consider with build either.', '/logos/logo4.png'),
       ('salas-group', 'Salas Group', 624,
        'Central whom mouth partner bring newspaper special city. Show second cost newspaper can early play.',
        '/logos/logo4.png'),
       ('thomas-sons', 'Thomas and Sons', 51,
        'Book detail scene continue. Art strategy because list two.',
        '/logos/logo1.png'),
       ('mejia-scott-ryan', 'Mejia, Scott and Ryan', NULL,
        'General traditional late situation discussion dog. Before best up strategy about direction.',
        '/logos/logo4.png'),
       ('mueller-moore', 'Mueller-Moore', 932,
        'Edge may report though least pressure likely. Cost short appear program hair seven.',
        '/logos/logo2.png'),
       ('pugh-ltd', 'Pugh Ltd', 87, 'Believe reflect perform TV son.',
        '/logos/logo2.png'),
       ('carr-wells-jones', 'Carr, Wells and Jones', 27,
        'Human medical throw book pick possible. Maybe yeah word beat treatment impact campaign.',
        '/logos/logo3.png'),
       ('hall-mills', 'Hall-Mills', 266,
        'Change stage tell note hundred. Worry where program wait.',
        '/logos/logo3.png'),
       ('robbins-marsh-martin', 'Robbins, Marsh and Martin', 709,
        'Now never worry usually another ability concern hair. Fly lot six protect participant. Teach through head.',
        '/logos/logo3.png'),
       ('sellers-bryant', 'Sellers-Bryant', 369,
        'Language discussion mission soon wait according executive. Financial say husband anyone money politics. Dinner action purpose mouth environment I white.',
        '/logos/logo3.png'),
       ('humphrey-llc', 'Humphrey LLC', 678,
        'Agent actually able paper nor. Tell then court full agree without assume.',
        '/logos/logo4.png'),
       ('graham-herring-lane', 'Graham, Herring and Lane', 188,
        'Enough attack return. Fall gas someone her another point those. Star public painting show concern.',
        '/logos/logo4.png'),
       ('weber-hernandez', 'Weber-Hernandez', 681,
        'Contain product south picture scientist.', '/logos/logo4.png');

INSERT INTO jobs (title, salary, equity, company_handle, description)
VALUES ('Conservator, furniture', 110000, 0, 'watson-davis', 'As a Conservator specializing in furniture, you will be responsible for the preservation, restoration, and maintenance of valuable furniture pieces. Your expertise will involve assessing the condition of furniture, implementing conservation treatments, and ensuring the long-term integrity of each item in your care.'),

('Information officer', 200000, 0, 'hall-mills', 'The Information Officer plays a crucial role in managing and optimizing an organizations information systems. Responsibilities include overseeing data security, implementing efficient information processes, and ensuring seamless communication between different departments within the company.'),

('Consulting civil engineer', 60000, 0, 'sellers-bryant', 'As a Consulting Civil Engineer, you will provide expert advice and consultation on civil engineering projects. This includes conducting feasibility studies, designing infrastructure, and collaborating with clients and project teams to ensure the successful implementation of engineering solutions.'),

('Early years teacher', 55000, 0, 'perez-miller', 'An Early Years Teacher is responsible for nurturing and educating young children, typically in preschool or kindergarten settings. Your role involves creating a positive learning environment, developing age-appropriate curriculum, and fostering the social and intellectual growth of your students.'),

('Intelligence analyst', 77000, 0, 'garner-michael', 'As an Intelligence Analyst, you will collect, analyze, and interpret information to provide valuable insights for decision-making. This role often involves working in security or law enforcement, where you''ll assess threats, monitor trends, and contribute to strategic planning.'),

('Surveyor, building', 144000, 0, 'russo-gillespie-conrad', 'A Building Surveyor specializes in assessing the condition of buildings. Your responsibilities include conducting inspections, preparing reports on structural integrity, and advising on maintenance and renovation projects. This role ensures compliance with building codes and regulations.'),

('Technical brewer', 157000, 0, 'anderson-arias-morrow', 'As a Technical Brewer, you will be involved in the production and quality control of beer. This role includes overseeing brewing processes, ensuring equipment functionality, and maintaining product consistency. Technical Brewers often work in breweries or beverage production facilities.'),

('Control and instrumentation engineer', 171000, 0, 'salas-group', 'Control and Instrumentation Engineers design, develop, and maintain control systems for various industrial processes. Responsibilities include selecting and configuring instrumentation, troubleshooting control systems, and collaborating with engineering teams to optimize automation.'),

('Photographer', 198000, 0, 'davis-davis', 'Photographers capture visual images using cameras, creating artistic or journalistic representations. Responsibilities may include planning and executing photo shoots, editing images, and collaborating with clients to achieve their vision. Specializations may include portrait, landscape, or commercial photography.'),

('Multimedia programmer', 192000, 0, 'graham-herring-lane', 'Multimedia Programmers create interactive and engaging digital content, combining elements such as text, audio, video, and graphics. This role involves programming and coding multimedia applications, websites, or software to deliver compelling user experiences.'),

('English as a foreign language teacher', 111000, 0, 'russo-gillespie-conrad', 'As an English as a Foreign Language (EFL) Teacher, you will instruct non-native speakers in the English language. Responsibilities include lesson planning, language instruction, and fostering language acquisition through various teaching methods.'),

('Passenger transport manager', 70000, 0, 'rivas-llc', 'A Passenger Transport Manager oversees the efficient operation of passenger transportation services. This role involves managing schedules, coordinating staff, ensuring compliance with safety regulations, and addressing customer service issues in the transportation sector.'),

('Psychologist, clinical', 172000, 0, 'hudson-inc', 'Clinical Psychologists diagnose and treat mental health disorders through therapeutic interventions. Responsibilities include conducting assessments, developing treatment plans, and providing counseling to individuals or groups. This role may involve working in healthcare or private practice.'),

('Financial planner', 115000, 0, 'taylor-yu-lee', 'Financial Planners offer personalized financial advice and planning services to clients. Responsibilities include assessing financial goals, creating investment strategies, and providing guidance on wealth management, retirement planning, and risk mitigation.'),

('Scientist, forensic', 50000, 0, 'foster-rice', 'Forensic Scientists apply scientific principles to investigate crimes and analyze evidence. This role involves collecting and analyzing physical evidence, presenting findings in court, and collaborating with law enforcement to solve criminal cases.'),

('Occupational therapist', 183000, 0, 'garcia-ray', 'Occupational Therapists help individuals improve their ability to perform daily activities and regain independence after injury or illness. Responsibilities include assessing clients, developing treatment plans, and guiding rehabilitation activities to enhance occupational skills.'),

('Ophthalmologist', 135000, 0, 'hall-mills', 'Ophthalmologists are medical doctors specializing in eye care. Responsibilities include diagnosing and treating eye conditions, performing surgeries, and providing routine eye care. This role requires extensive medical training and expertise in ophthalmic medicine.'),

('Embryologist, clinical', 138000, 0, 'anderson-arias-morrow', 'Clinical Embryologists specialize in the study and manipulation of human embryos in the context of fertility treatments. Responsibilities include conducting fertility assessments, performing in vitro fertilization (IVF), and monitoring embryo development.'),

('Marine scientist', 54000, 0, 'scott-smith', 'Marine Scientists study the ocean and its ecosystems to understand marine life, environmental changes, and the impact of human activities. Responsibilities may include conducting research, collecting data at sea, and contributing to marine conservation efforts.'),

('Tourist information centre manager', 88000, 0, 'foster-rice', 'Tourist Information Centre Managers oversee the operation of information centers that provide assistance and guidance to tourists. Responsibilities include managing staff, coordinating services, and promoting local attractions and events.'),

('Interior and spatial designer', 177000, 0, 'gillespie-smith', 'Interior and Spatial Designers plan and create functional and aesthetically pleasing interior spaces. Responsibilities include collaborating with clients, developing design concepts, selecting materials, and overseeing the implementation of interior design projects.'),

('Surveyor, rural practice', 193000, 0, 'weber-hernandez', 'Rural Practice Surveyors specialize in assessing and valuing rural properties, including agricultural land, farms, and estates. This role involves conducting surveys, providing property advice, and supporting clients in rural land management and development.'),

('Colour technologist', 81000, 0, 'burton-ltd', 'Colour Technologists work in industries such as textiles or manufacturing, ensuring the accurate and consistent application of color in products. Responsibilities include color matching, quality control, and collaborating with production teams to achieve desired color outcomes.'),

('Technical brewer', 77000, 0, 'thomas-sons', 'Technical Brewers play a key role in the brewing industry, overseeing the production process and ensuring the quality of brewed beverages. Responsibilities include recipe development, equipment maintenance, and adherence to brewing standards.'),

('Pharmacist, hospital', 194000, 0, 'boyd-evans', 'Hospital Pharmacists are responsible for dispensing medications, providing drug information to healthcare professionals, and ensuring the safe and effective use of pharmaceuticals in a hospital setting. This role requires extensive knowledge of medications and their interactions.'),

('Medical sales representative', 125000, 0, 'jackson-davila-conley', 'Medical Sales Representatives promote and sell pharmaceutical and medical products to healthcare professionals. Responsibilities include building relationships with clients, delivering product presentations, and achieving sales targets in the medical industry.'),

('Energy engineer', 62000, 0, 'norman-harvey', 'Energy Engineers focus on improving energy efficiency and sustainability in various systems and structures. Responsibilities include conducting energy audits, designing energy-efficient systems, and recommending solutions to reduce energy consumption.'),

('Research officer, government', 167000, 0, 'mejia-scott-ryan', 'Government Research Officers conduct research on public policy, social issues, or economic trends to inform government decision-making. Responsibilities include data analysis, report writing, and providing evidence-based recommendations to government agencies.'),

('Barrister', 130000, 0, 'stone-stewart', 'Barristers are legal professionals who specialize in courtroom advocacy and providing legal advice. Responsibilities include representing clients in court, conducting legal research, and offering expert opinions on legal matters.'),

('Loss adjuster, chartered', 76000, 0, 'bauer-gallagher', 'Chartered Loss Adjusters assess insurance claims, investigate losses, and determine the appropriate compensation for policyholders. Responsibilities include conducting site visits, negotiating settlements, and ensuring compliance with insurance policies.'),

('Database administrator', 79000, 0, 'willis-henson-miller', 'Database Administrators manage and maintain databases to ensure data integrity, security, and efficient access. Responsibilities include designing databases, implementing security measures, and troubleshooting issues to optimize database performance.'),

('IT consultant', 59000, 0, 'gillespie-smith', 'IT Consultants provide expertise on information technology to help organizations optimize their IT systems and processes. Responsibilities include analyzing technology needs, recommending solutions, and implementing IT strategies to improve efficiency and performance.'),

('Museum/gallery conservator', 82000, 0, 'mejia-scott-ryan', 'Museum/Gallery Conservators specialize in the preservation and restoration of artworks and artifacts in museums and galleries. Responsibilities include assessing the condition of objects, developing conservation plans, and performing hands-on conservation work.'),

('Engineering geologist', 170000, 0, 'garcia-ray', 'Engineering Geologists study the geological conditions of construction sites to assess potential risks and provide recommendations for engineering projects. Responsibilities include conducting site investigations, analyzing soil and rock samples, and contributing to project planning.'),

('Television production assistant', 125000, 0, 'logan-miller', 'Television Production Assistants support the production team in creating television programs. Responsibilities include coordinating logistics, organizing schedules, assisting with pre-production and post-production tasks, and ensuring the smooth flow of production activities.'),

('Accountant, chartered certified', 175000, 0, 'stone-stewart', 'Chartered Certified Accountants are professional accountants with a recognized certification. Responsibilities include financial reporting, auditing, tax planning, and providing financial advice to clients or organizations.'),

('Merchant navy officer', 106000, 0, 'mitchell-brown', 'Merchant Navy Officers are responsible for the safe and efficient operation of ships. Responsibilities include navigation, overseeing crew activities, ensuring compliance with maritime regulations, and responding to emergencies at sea.'),

('Medical physicist', 84000, 0, 'perez-miller', 'Medical Physicists apply principles of physics to healthcare, specializing in the use of radiation and other technologies for medical diagnosis and treatment. Responsibilities include calibrating equipment, ensuring safety standards, and collaborating with medical professionals.'),

('Podiatrist', 68000, NULL, 'reynolds-greene', 'Podiatrists, also known as foot doctors, specialize in the diagnosis and treatment of foot and ankle conditions. Responsibilities include examining patients, prescribing orthotics, performing surgeries, and educating patients on foot health.'),

('Nurse, children''s', 162000, NULL, 'humphrey-llc', 'Children''s Nurses provide specialized care to pediatric patients. Responsibilities include administering medications, monitoring vital signs, coordinating with healthcare teams, and educating families on child health and wellness.'),

('Teacher, music', 127000, NULL, 'ingram-ferguson-rubio', 'Music Teachers educate students in the principles and practices of music. Responsibilities include planning and delivering lessons, organizing performances, and fostering a love for music among students of various age groups.'),

('Occupational hygienist', 79000, NULL, 'reynolds-greene', 'Occupational Hygienists assess and control workplace environmental factors to protect the health and safety of workers. Responsibilities include conducting risk assessments, implementing control measures, and educating workers on occupational health practices.'),

('Research officer, political party', 134000, NULL, 'garner-michael', 'Research Officers in political parties conduct research to inform policy development, campaign strategies, and political decision-making. Responsibilities include analyzing public opinion, monitoring political trends, and providing research-based recommendations.'),

('Therapist, occupational', 82000, NULL, 'mejia-scott-ryan', 'Occupational Therapists help individuals improve their ability to perform daily activities and regain independence after injury or illness. Responsibilities include assessing clients, developing treatment plans, and guiding rehabilitation activities to enhance occupational skills.'),

('Teacher, secondary school', 127000, NULL, 'sellers-bryant', 'Secondary School Teachers educate students in grades 9-12 in various subjects. Responsibilities include lesson planning, classroom instruction, student assessment, and fostering a positive and engaging learning environment.'),

('Scientist, product/process development', 106000, NULL, 'scott-smith', 'Scientists in Product/Process Development focus on creating and improving products or processes. Responsibilities include research, experimentation, data analysis, and collaboration with cross-functional teams to bring new products or processes to market.'),
('Astronomer', 143000, NULL, 'watson-davis', 'Astronomers study celestial bodies, such as stars, planets, and galaxies, to understand the universe. Responsibilities include conducting observations, analyzing data, and contributing to scientific knowledge in the field of astronomy.'),
('Counsellor', NULL, 0, 'owen-newton', 'Counsellors provide guidance and support to individuals or groups facing emotional or psychological challenges.'),
('Financial controller', NULL, 0, 'sellers-bryant', 'Financial Controllers oversee financial activities in an organization, ensuring accuracy, compliance, and financial health.'),
('Advertising account executive', NULL, 0, 'thomas-sons', 'Advertising Account Executives manage client relationships and coordinate advertising campaigns to meet client objectives.'),
('Buyer, industrial', NULL, NULL, 'reynolds-greene', 'Industrial Buyers are responsible for purchasing goods and services for industrial operations, considering cost, quality, and supplier relationships.'),
('Interpreter', 55000, 0, 'hudson-inc', 'Interpreters translate spoken or signed language to facilitate communication between people who speak different languages.'),
('Best boy', NULL, 0, 'jackson-sons', 'Best Boys assist in the management and coordination of technical aspects during film or television production.'),
('Freight forwarder', 183000, 0, 'hudson-inc', 'Freight Forwarders organize and manage the shipment of goods from one place to another, ensuring efficient and timely delivery.'),
('Designer, jewellery', NULL, 0, 'weber-hernandez', 'Jewellery Designers create designs for various types of jewelry, considering style, materials, and market trends.'),
('Tree surgeon', NULL, 0.001, 'hall-davis', 'Tree Surgeons, or arborists, care for and maintain trees, including pruning, removal, and overall tree health.'),
('Management consultant', 183000, 0, 'edwards-lee-reese', 'Management Consultants advise organizations on improving efficiency, solving problems, and achieving business goals.'),
('Ergonomist', 160000, 0, 'bauer-gallagher', 'Ergonomists study the interaction between people and their environments, aiming to design products and systems that enhance human well-being and performance.'),
('Psychologist, forensic', 176000, 0, 'boyd-evans', 'Forensic Psychologists apply psychological principles to legal issues, working in criminal investigations, legal proceedings, and correctional settings.'),
('Architectural technologist', 57000, 0, 'owen-newton', 'Architectural Technologists support architects in the technical aspects of building design and construction, including drafting and project coordination.'),
('Patent attorney', 143000, 0, 'foster-rice', 'Patent Attorneys specialize in intellectual property law, helping clients secure patents for inventions and navigate legal aspects of innovation.'),
('Art gallery manager', 1000000, 0.085, 'anderson-arias-morrow', 'Art Gallery Managers oversee the operations of art galleries, including curation, exhibition planning, and administrative tasks.'),
('Engineer, chemical', 81000, 0, 'russo-gillespie-conrad', 'Chemical Engineers design and oversee processes for the production, transformation, and use of chemicals and materials.'),
('Speech and language therapist', 159000, 0, 'gillespie-smith', 'Speech and Language Therapists assess and treat communication and swallowing disorders, working with individuals of all ages.'),
('Orthoptist', 200000, 0, 'perez-miller', 'Orthoptists diagnose and treat eye disorders, specifically those related to eye movement and alignment, in collaboration with ophthalmologists.'),
('Camera operator', 130000, 0, 'arnold-berger-townsend', 'Camera Operators capture visual images for film, television, or other media productions, operating cameras and collaborating with directors.'),
('Field trials officer', 137000, 0, 'davis-davis', 'Field Trials Officers plan and conduct experiments and trials, often in agriculture or environmental science, to collect data and test hypotheses.'),
('Transport planner', NULL, NULL, 'reynolds-greene', 'Transport Planners develop and optimize transportation systems, considering factors such as efficiency, cost, and environmental impact.'),
('Bonds trader', NULL, NULL, 'mitchell-brown', 'Bonds Traders buy and sell financial instruments, specializing in bonds, to capitalize on market trends and fluctuations.'),
('Editor, magazine features', 118000, 0.002, 'foster-rice', 'Magazine Features Editors oversee the creation and publication of feature articles, ensuring quality, relevance, and adherence to editorial guidelines.'),
('Applications developer', 84000, 0.091, 'sellers-bryant', 'Applications Developers create and maintain software applications, designing and coding programs to meet user needs and technological requirements.'),
('Clothing/textile technologist', 171000, 0.041, 'smith-llc', 'Clothing/Textile Technologists work in the textile industry, developing and testing fabrics, dyes, and manufacturing processes to ensure quality and functionality.'),
('Secretary/administrator', 172000, 0.096, 'jackson-sons', 'Secretaries/Administrators provide administrative support, including organizing schedules, managing communications, and handling office tasks.'),
('Field seismologist', 62000, 0.064, 'martinez-daniels', 'Field Seismologists study seismic activity and earthquakes, collecting and analyzing data to understand geological processes and assess potential risks.'),
('Engineer, materials', 185000, 0.081, 'garner-michael', 'Materials Engineers research, design, and develop materials with specific properties for various applications, from electronics to construction.'),
('Race relations officer', 97000, 0.065, 'bauer-gallagher', 'Race Relations Officers work on promoting equality and diversity, addressing issues related to race and ethnicity in communities or organizations.'),
('Engineering geologist', 89000, 0.043, 'ayala-buchanan', 'Engineering Geologists assess geological factors in construction projects, providing insights into soil stability, rock formations, and potential hazards.'),
('Aeronautical engineer', 135000, 0.078, 'norman-harvey', 'Aeronautical Engineers design and develop aircraft and related systems, considering aerodynamics, materials, and safety regulations.'),
('Development worker, community', 192000, 0.047, 'weber-hernandez', 'Community Development Workers support initiatives and projects to improve the well-being of communities, addressing social, economic, and environmental issues.'),
('Speech and language therapist', 154000, 0.014, 'humphrey-llc', 'Speech and Language Therapists assess and treat communication and swallowing disorders, working with individuals of all ages.'),
('Health promotion specialist', 72000, 0.010, 'burton-ltd', 'Health Promotion Specialists design and implement programs to educate and promote healthy lifestyles, addressing public health issues and risk factors.'),
('Careers adviser', 57000, 0.051, 'carr-wells-jones', 'Careers Advisers provide guidance and advice to individuals on career choices, development opportunities, and job search strategies.'),
('Surveyor, minerals', 98000, 0.037, 'carr-wells-jones', 'Minerals Surveyors assess and manage mineral resources, conducting surveys, valuations, and environmental impact assessments in the mining industry.'),
('Forest/woodland manager', 156000, 0.030, 'carr-wells-jones', 'Forest/Woodland Managers oversee the sustainable management of forests, balancing ecological, economic, and recreational considerations.'),
('Haematologist', 63000, 0.062, 'ayala-buchanan', 'Haematologists specialize in the study and treatment of blood disorders, conducting diagnostic tests and managing medical care for patients with blood-related conditions.'),
('Advertising account executive', 130000, 0.064, 'thomas-sons', 'Advertising Account Executives manage client relationships and coordinate advertising campaigns to meet client objectives.'),
('Ship broker', 124000, 0.045, 'davis-davis', 'Ship Brokers facilitate the buying and selling of ships and vessels, negotiating contracts, coordinating logistics, and ensuring compliance with maritime regulations.'),
('Fisheries officer', 67000, 0.062, 'hall-davis', 'Fisheries Officers monitor and manage aquatic resources, enforcing regulations, conducting research, and promoting sustainable fishing practices.'),
('Air cabin crew', 105000, 0.077, 'ingram-ferguson-rubio', 'Air Cabin Crew members ensure the safety and comfort of airline passengers, providing customer service, managing emergencies, and adhering to aviation regulations.'),
('Financial trader', 153000, 0.012, 'garner-michael', 'Financial Traders buy and sell financial instruments, such as stocks or commodities, to capitalize on market trends and generate profits.'),
('Paramedic', 122000, 0.047, 'baker-santos', 'Paramedics provide emergency medical care, responding to accidents or medical incidents, administering first aid, and transporting patients to medical facilities.'),
('Historic buildings inspector/conservation officer', 129000, 0.052, 'watson-davis', 'Historic Buildings Inspectors/Conservation Officers assess and preserve historic structures, ensuring compliance with conservation standards and regulations.'),
('Transport planner', 123000, 0.091, 'hudson-inc', 'Transport Planners develop and optimize transportation systems, considering factors such as efficiency, cost, and environmental impact.'),
('Public librarian', 115000, 0.099, 'norman-harvey', 'Public Librarians manage library services, assist patrons with research, and promote literacy and community engagement through library programs.'),
('Writer', 172000, 0.091, 'anderson-arias-morrow', 'Writers create written content for various purposes, including books, articles, scripts, or online platforms, expressing ideas and stories through words.'),
('Designer, fashion/clothing', 81000, 0.026, 'garcia-ray', 'Fashion/Clothing Designers create clothing and accessory designs, considering style, fabric, and market trends to meet consumer preferences.'),
('Information systems manager', 123000, 0.100, 'arnold-berger-townsend', 'Information Systems Managers oversee the design, implementation, and maintenance of an organizations computer systems and software applications.'),
('Art gallery manager', 73000, 0.054, 'perez-miller', 'Art Gallery Managers oversee the operations of art galleries, including curation, exhibition planning, and administrative tasks.'),
('Operational researcher', 167000, 0.020, 'ayala-buchanan', 'Operational Researchers analyze and optimize organizational processes, using mathematical and analytical methods to improve efficiency and decision-making.'),
('Solicitor', 131000, 0.034, 'wiggins-frederick-boyer', 'Solicitors provide legal advice and representation to clients, preparing legal documents, negotiating settlements, and representing clients in court if necessary.'),
('Intelligence analyst', 148000, 0, 'sellers-bryant', 'Intelligence Analysts gather and analyze information to provide insights into security threats, supporting decision-making in national security or law enforcement.'),
('Naval architect', 126000, 0, 'scott-smith', 'Naval Architects design and oversee the construction of ships and other marine vessels, considering factors such as stability, efficiency, and safety regulations.'),
('Dealer', 175000, 0, 'hall-mills', 'Dealers buy and sell financial instruments, such as stocks or commodities, in financial markets to capitalize on market trends and generate profits.'),
('Multimedia programmer', 154000, NULL, 'owen-newton', 'Multimedia Programmers develop software and applications that incorporate multimedia elements, such as graphics, audio, and video, for interactive user experiences.'),
('Psychologist, occupational', 190000, NULL, 'robbins-marsh-martin', 'Occupational Psychologists apply psychological principles to workplace issues, helping organizations enhance employee satisfaction, performance, and well-being.'),
('Leisure centre manager', 135000, NULL, 'edwards-lee-reese', 'Leisure Centre Managers oversee the operations of recreational facilities, ensuring smooth functioning, customer satisfaction, and adherence to safety regulations.'),
('Television production assistant', 99000, NULL, 'edwards-lee-reese', 'Television Production Assistants support the production team in various tasks, including administrative duties, coordination, and on-set assistance.'),
('Historic buildings inspector/conservation officer', 135000, NULL, 'rivas-llc', 'Historic Buildings Inspectors/Conservation Officers assess and preserve historic structures, ensuring compliance with conservation standards and regulations.'),
('Sports development officer', 102000, NULL, 'scott-smith', 'Sports Development Officers promote and organize sports programs, fostering community participation, talent development, and healthy lifestyles through sports.'),
('Investment banker, corporate', 131000, NULL, 'ingram-ferguson-rubio', 'Corporate Investment Bankers advise companies on financial strategies, mergers and acquisitions, and capital raising to support corporate growth and development.'),
('Conservation officer, historic buildings', 168000, NULL, 'robbins-marsh-martin', 'Conservation Officers specializing in historic buildings are responsible for preserving and protecting historically significant structures. They assess the condition of buildings, recommend conservation measures, and ensure compliance with preservation standards.'),

('Physicist, medical', 190000, NULL, 'humphrey-llc', 'Medical Physicists apply principles of physics to the field of medicine. They contribute to the development and maintenance of medical imaging equipment, radiation therapy, and other medical technologies.'),

('Press sub', 100000, NULL, 'erickson-inc', 'Press Sub-Editors work for newspapers or magazines, overseeing the editing and layout of written content. They ensure articles meet editorial standards, correct grammar and style, and collaborate with writers and editors.'),

('Engineer, civil (contracting)', NULL, 0.018, 'moore-plc', 'Civil Engineers in contracting focus on planning and managing construction projects. They oversee the implementation of infrastructure projects, such as roads and buildings, ensuring they meet design specifications and regulatory requirements.'),

('Therapist, music', 103000, 0.087, 'reynolds-greene', 'Music Therapists use music as a therapeutic tool to address the physical, emotional, and mental well-being of individuals. They work in various settings, such as hospitals, schools, or rehabilitation centers.'),

('Water engineer', NULL, 0.028, 'mejia-scott-ryan', 'Water Engineers design and implement systems for the collection, distribution, and treatment of water. They contribute to water resource management, addressing issues like water quality, sustainability, and infrastructure development.'),

('Engineer, energy', NULL, 0.048, 'arnold-berger-townsend', 'Energy Engineers focus on the production, distribution, and efficient use of energy. They work on projects related to renewable energy, energy conservation, and the development of sustainable energy solutions.'),

('Plant breeder/geneticist', NULL, 0.081, 'thomas-sons', 'Plant Breeders/Geneticists work in agriculture to develop new plant varieties with desirable traits. They use genetic techniques to improve crop yield, resistance to diseases, and other characteristics.'),

('Oceanographer', NULL, 0.097, 'anderson-arias-morrow', 'Oceanographers study the physical, chemical, and biological aspects of the ocean. They research marine life, ocean currents, and the impact of human activities on marine ecosystems.'),

('Clinical cytogeneticist', 152000, 0.027, 'mitchell-brown', 'Clinical Cytogeneticists analyze the chromosomal structure of cells to diagnose genetic disorders. They work in medical laboratories, collaborating with healthcare professionals to provide accurate genetic testing and counseling.'),

('Nature conservation officer', 82000, 0.093, 'watson-davis', 'Nature Conservation Officers focus on protecting and preserving natural habitats and wildlife. They implement conservation initiatives, conduct environmental assessments, and promote sustainable practices.'),

('Insurance underwriter', NULL, 0.008, 'hall-davis', 'Insurance Underwriters assess and evaluate insurance applications to determine coverage and premiums. They analyze risk factors, review policy terms, and make decisions to minimize financial losses for insurance companies.'),

('Chief of Staff', 110000, 0.016, 'scott-smith', 'Chiefs of Staff play a crucial role in supporting high-level executives and leaders. They manage schedules, coordinate communication, and assist in decision-making to ensure efficient operations within an organization.'),

('Surveyor, insurance', NULL, 0.066, 'foster-rice', 'Insurance Surveyors assess properties and assets to determine their insurability. They evaluate risks, inspect buildings, and provide information to insurance companies for underwriting purposes.'),

('Surveyor, building control', NULL, NULL, 'reynolds-greene', 'Building Control Surveyors ensure that construction projects comply with building regulations and safety standards. They inspect structures, review plans, and issue approvals or recommendations for improvements.'),

('Trade mark attorney', NULL, NULL, 'mueller-moore', 'Trade Mark Attorneys specialize in intellectual property law, specifically dealing with trademarks. They help clients register and protect trademarks, and may also handle disputes and infringement cases.'),

('Glass blower/designer', 126000, 0.099, 'anderson-arias-morrow', 'Glass Blower/Designers create artistic glass objects through blowing, shaping, and manipulating molten glass. They may produce functional items or one-of-a-kind art pieces, collaborating with other artists or working independently.'),

('Geochemist', 130000, 0.004, 'smith-llc', 'Geochemists study the chemical composition of rocks, minerals, and fluids in the Earth''s crust'),

('Scientist, research (physical sciences)', 117000, 0.090, 'ayala-buchanan', 'Scientists specializing in physical sciences conduct research to understand and explore natural phenomena. They apply principles of physics and chemistry to investigate various aspects of the physical world.'),

('Historic buildings inspector/conservation officer', 65000, 0.075, 'mejia-scott-ryan', 'Historic Buildings Inspectors/Conservation Officers assess and oversee the preservation of historically significant structures. They ensure that buildings adhere to preservation standards and work to protect cultural heritage.'),

('Surveyor, insurance', 130000, 0.009, 'martinez-daniels', 'Insurance Surveyors assess properties and assets for insurance purposes. They evaluate risks, inspect buildings, and provide information to insurance companies to determine coverage and premiums.'),

('Contractor', 89000, 0.065, 'mueller-moore', 'Contractors are professionals involved in overseeing and managing construction projects. They coordinate with subcontractors, manage budgets, and ensure that construction projects are completed on time and within specifications.'),

('Hydrologist', 50000, 0.097, 'wiggins-frederick-boyer', 'Hydrologists study water distribution, movement, and quality in the Earth''s atmosphere. They play a crucial role in water resource management, assessing the impact of human activities on water systems.'),

('Aeronautical engineer', 156000, 0.055, 'perez-miller', 'Aeronautical Engineers specialize in the design and development of aircraft and related systems. They work on projects ranging from aircraft design to propulsion systems and aerodynamics.'),

('Freight forwarder', 183000, 0.093, 'burton-ltd', 'Freight Forwarders coordinate the transportation of goods from one location to another. They work with shipping companies, customs officials, and logistics providers to ensure the smooth movement of cargo.'),

('Engineer, materials', 140000, 0.057, 'mitchell-brown', 'Materials Engineers focus on the development and testing of materials used in manufacturing and construction. They analyze the properties of materials and recommend suitable materials for specific applications.'),

('Product designer', 184000, 0.090, 'gillespie-smith', 'Product Designers create and develop the appearance and functionality of consumer products. They consider aesthetics, usability, and manufacturing processes to design innovative and marketable products.'),

('Editor, film/video', 199000, 0.070, 'bauer-gallagher', 'Film/Video Editors are responsible for assembling raw footage into a cohesive and visually appealing final product. They work in the post-production phase of filmmaking, collaborating with directors and producers.'),

('Fashion designer', 131000, 0.080, 'taylor-yu-lee', 'Fashion Designers create clothing, accessories, and footwear. They follow trends, sketch designs, select fabrics, and oversee the production of their creations, working in the dynamic and ever-changing fashion industry.'),

('Legal secretary', 155000, 0.080, 'pugh-ltd', 'Legal Secretaries provide administrative support to lawyers and legal professionals. They assist with document preparation, scheduling, and client communication within a legal setting.'),

('Financial risk analyst', 72000, 0.001, 'scott-smith', 'Financial Risk Analysts assess potential financial risks for organizations. They analyze market trends, evaluate investment portfolios, and provide recommendations to mitigate financial losses.'),

('Regulatory affairs officer', 96000, 0.061, 'logan-miller', 'Regulatory Affairs Officers ensure that an organization complies with industry regulations and standards. They liaise with regulatory agencies, prepare documentation, and facilitate compliance with relevant laws.'),

('Ranger/warden', 86000, 0.095, 'ayala-buchanan', 'Rangers/Wardens work in natural parks or reserves, overseeing conservation efforts and ensuring the well-being of wildlife. They may enforce park regulations, conduct educational programs, and monitor environmental conditions.'),

('Farm manager', 138000, 0.085, 'stone-stewart', 'Farm Managers oversee the day-to-day operations of agricultural enterprises. They plan and implement farming activities, manage resources, and make strategic decisions to ensure the productivity of the farm.'),

('Primary school teacher', 142000, 0.036, 'moore-plc', 'Primary School Teachers educate young children in foundational subjects such as mathematics, language arts, and science. They create lesson plans, assess student progress, and foster a positive learning environment.'),

('Quality manager', 138000, 0.002, 'russo-gillespie-conrad', 'Quality Managers are responsible for ensuring that products or services meet established quality standards. They develop and implement quality control processes, conduct audits, and address issues related to product quality.'),

('Radio producer', 99000, 0.038, 'mitchell-brown', 'Radio Producers oversee the production of radio programs, including content development, scriptwriting, and coordination of on-air talent. They work in broadcasting and may collaborate with hosts, engineers, and other production staff.'),

('Music therapist', 100000, 0.058, 'taylor-yu-lee', 'Music Therapists use music as a therapeutic tool to address the physical, emotional, and mental well-being of individuals. They work in various settings, such as hospitals, schools, or rehabilitation centers.'),

('Farm manager', 68000, 0.049, 'morgan-sullivan', 'Farm Managers oversee the day-to-day operations of agricultural enterprises. They plan and implement farming activities, manage resources, and make strategic decisions to ensure the productivity of the farm.'),

('Camera operator', 51000, 0.066, 'jackson-davila-conley', 'Camera Operators capture visual images for film, television, or other media productions. They work with directors and cinematographers to frame shots, operate cameras, and achieve the desired visual effects.'),

('Engineer, technical sales', 167000, 0.077, 'ingram-ferguson-rubio', 'Engineers in Technical Sales combine technical expertise with sales skills. They communicate with clients, understand their technical needs, and propose solutions, bridging the gap between engineering and business.'),

('Ranger/warden', 145000, 0.046, 'jackson-davila-conley', 'Rangers/Wardens work in natural parks or reserves, overseeing conservation efforts and ensuring the well-being of wildlife. They may enforce park regulations, conduct educational programs, and monitor environmental conditions.'),

('Lawyer', 162000, 0.072, 'hall-mills', 'Lawyers provide legal advice and representation to clients. They may specialize in various areas of law, such as criminal law, corporate law, or family law, and advocate for their clients in legal proceedings.'),

('Estate manager/land agent', 94000, 0.008, 'jackson-davila-conley', 'Estate Managers/Land Agents oversee the management of real estate properties. They may handle property transactions, negotiate leases, and ensure the effective utilization of land and resources.'),

('Orthoptist', 129000, 0.062, 'willis-henson-miller', 'Orthoptists specialize in the diagnosis and non-surgical treatment of eye movement and coordination issues. They work with patients, often children, to improve vision and address eye-related disorders.'),

('Recycling officer', 57000, 0.098, 'carr-wells-jones', 'Recycling Officers promote and implement recycling programs to reduce waste around the world!'),

('Scientist, research (life sciences)', 157000, 0.057, 'ayala-buchanan', 'Scientists specializing in life sciences conduct research to understand living organisms and biological processes. They may work in fields such as biology, genetics, or biochemistry, contributing to advancements in medical and environmental sciences.'),

('Armed forces technical officer', 136000, 0.012, 'scott-smith', 'Armed Forces Technical Officers in the military are responsible for managing and maintaining complex technical systems. They ensure the operational readiness of equipment and may provide technical support during military operations.'),

('Public relations officer', 112000, 0.087, 'weber-hernandez', 'Public Relations Officers manage communication between organizations and the public. They create and maintain a positive public image, handle media relations, and develop strategies to promote and protect the reputation of the organization.'),

('Set designer', 132000, 0.055, 'russo-gillespie-conrad', 'Set Designers work in the entertainment industry, creating visual designs for film, television, or theater sets. They collaborate with directors and production teams to bring the artistic vision of a production to life.'),

('Accountant, chartered certified', 86000, 0.070, 'boyd-evans', 'Chartered Certified Accountants are finance professionals with recognized certifications. They handle financial reporting, audits, and taxation matters, ensuring compliance with accounting standards and regulations.'),

('Special effects artist', 101000, 0.023, 'willis-henson-miller', 'Special Effects Artists create visual effects for films, television, or other media productions. They use various techniques, including CGI and practical effects, to enhance the visual experience and bring imaginative elements to life.'),

('Glass blower/designer', 60000, 0.095, 'mueller-moore', 'Glass Blowers/Designers specialize in the art and craft of shaping molten glass into functional or decorative objects. They may create items such as glassware, sculptures, or artistic installations using traditional or contemporary techniques.'),

('Print production planner', 197000, 0.095, 'humphrey-llc', 'Print Production Planners coordinate and schedule the printing of materials, such as newspapers, magazines, or marketing collateral. They work with printing facilities to ensure efficient production processes and timely delivery.'),

('Psychologist, counselling', 180000, 0.008, 'perez-miller', 'Counseling Psychologists provide mental health support through counseling services. They work with individuals or groups to address emotional, behavioral, or interpersonal challenges and promote psychological well-being.'),

('Meteorologist', 81000, 0.037, 'sellers-bryant', 'Meteorologists study atmospheric conditions to understand and predict weather patterns. They use scientific instruments and computer models to analyze data, issue weather forecasts, and provide information for public safety and planning.'),

('Therapist, drama', 200000, 0.095, 'hall-mills', 'Drama Therapists use theatrical and dramatic techniques to help individuals explore and address emotional, social, or psychological challenges. They may work in therapeutic settings, schools, or community organizations.'),

('Engineer, technical sales', 157000, 0.083, 'baker-santos', 'Engineers in Technical Sales combine technical expertise with sales skills. They communicate with clients, understand their technical needs, and propose solutions, bridging the gap between engineering and business.'),

('Scientist, audiological', 61000, 0.095, 'foster-rice', 'Audiological Scientists study hearing and related disorders. They may be involved in researching hearing loss causes, developing hearing aids, or providing diagnostic services to individuals with hearing impairments.'),

('Dietitian', 198000, 0, 'ayala-buchanan', 'Dietitians are health professionals who specialize in nutrition and dietary practices. They assess individuals'' nutritional needs, develop meal plans, and provide guidance on healthy eating habits to promote overall well-being.'),

('Electrical engineer', 157000, NULL, 'jackson-davila-conley', 'Electrical Engineers design, develop, and maintain electrical systems and components. They work on a wide range of projects, from power generation and distribution to electronic devices and systems.'),

('Agricultural consultant', 67000, NULL, 'moore-plc', 'Agricultural Consultants provide expertise and advice to farmers and agricultural businesses. They may offer guidance on crop management, livestock care, and sustainable farming practices to improve overall productivity.'),

('Geochemist', 104000, NULL, 'hudson-inc', 'Geochemists study the chemical composition of rocks, minerals, and fluids in the Earth''s crust. They analyze geological samples to understand processes such as mineral formation, environmental changes, and the movement of substances in the Earth.'),

('Geologist, engineering', 116000, NULL, 'jackson-davila-conley', 'Engineering Geologists assess geological conditions for construction projects. They evaluate soil and rock properties, identify potential hazards, and provide recommendations to ensure the stability and safety of structures.'),

('Clinical biochemist', 92000, NULL, 'norman-harvey', 'Clinical Biochemists work in medical laboratories, conducting tests on biological samples to diagnose and monitor diseases. They analyze biochemical components and contribute to medical research and patient care.'),

('Probation officer', 128000, NULL, 'foster-rice', 'Probation Officers monitor individuals who have been placed on probation as an alternative to incarceration. They work with probationers, conduct assessments, and ensure compliance with court-ordered conditions.'),

('Chief Executive Officer', 83000, NULL, 'miller-woods-hernandez', 'Chief Executive Officers (CEOs) are top executives responsible for leading and making strategic decisions for an organization. They set overall direction, oversee operations, and represent the company to stakeholders.'),

('Surveyor, building', 144000, 0.007, 'salas-group', 'Building Surveyors assess and report on the condition of buildings. They inspect structures for defects, compliance with regulations, and provide recommendations for maintenance or improvements. The Salas Group is a reputable firm specializing in surveying services.'),

('Engineer, water', 165000, 0.010, 'ingram-ferguson-rubio', 'Water Engineers focus on designing and managing water-related projects. They work on tasks such as water treatment, distribution systems, and environmental conservation. Ingram, Ferguson & Rubio is known for its expertise in water engineering.'),

('Psychologist, counselling', 111000, 0.059, 'taylor-yu-lee', 'Counseling Psychologists provide mental health support through counseling services. They work with individuals or groups to address emotional, behavioral, or interpersonal challenges and promote psychological well-being. Taylor, Yu & Lee is a counseling practice known for its compassionate approach.'),

('Astronomer', 55000, 0.074, 'martinez-daniels', 'Astronomers study celestial objects and phenomena beyond Earth''s atmosphere. They use telescopes and other instruments to observe, analyze, and interpret astronomical data. Martinez Daniels is a renowned expert in the field of astronomy.'),

('Medical physicist', 110000, 0.015, 'mitchell-brown', 'Medical Physicists apply principles of physics to healthcare, particularly in the use of radiation for medical imaging and treatments. Mitchell Brown specializes in the application of physics in medical settings, ensuring the safe and effective use of technology.'),

('Chief Technology Officer', 64000, 0.067, 'robbins-marsh-martin', 'Chief Technology Officers (CTOs) are executives responsible for leading an organization''s technological strategy. They play a key role in innovation, overseeing technology development, and ensuring alignment with business goals. Robbins, Marsh & Martin is a company known for its forward-thinking technology leadership.'),

('Arboriculturist', 191000, 0.062, 'salas-group', 'Arboriculturists study and manage trees, focusing on their health, care, and preservation. The Salas Group employs skilled arboriculturists who assess and provide recommendations for the well-being of trees in various environments.'),

('Conservation officer, nature', 108000, 0.006, 'jackson-davila-conley', 'Conservation Officers dedicated to nature focus on preserving and protecting natural habitats and wildlife. They enforce conservation laws, conduct research, and educate the public on environmental stewardship. Jackson, Davila & Conley is actively involved in nature conservation efforts.'),

('Psychologist, sport and exercise', 172000, 0.061, 'ayala-buchanan', 'Sport and Exercise Psychologists specialize in enhancing performance, well-being, and mental toughness in athletes and individuals engaged in physical activities. Ayala Buchanan is a recognized expert in the psychological aspects of sports and exercise.'),

('Designer, furniture', 149000, 0.041, 'mueller-moore', 'Furniture Designers create innovative and functional furniture pieces. They combine artistic flair with practical considerations to design products that meet both aesthetic and ergonomic requirements. Mueller Moore is a design firm known for its contemporary furniture creations.'),

('Chartered loss adjuster', 72000, 0.084, 'davis-davis', 'Chartered Loss Adjusters assess and investigate insurance claims to determine the extent of loss or damage. They play a crucial role in helping insurance companies make fair settlements. Davis & Davis is a reputable firm specializing in loss adjustment.'),

('Producer, radio', 168000, 0.010, 'salas-group', 'Radio Producers oversee the production of radio shows and content. They coordinate with hosts, writers, and technical staff to create engaging and high-quality broadcasts. The Salas Group extends its expertise to radio production, ensuring captivating and informative programming.'),

('Operational investment banker', 200000, 0.022, 'smith-llc', 'Operational Investment Bankers focus on the operational aspects of financial transactions and investments. They work with businesses to optimize financial processes and strategies. Smith LLC is a financial firm known for its expertise in operational investment banking.'),

('Surveyor, quantity', 72000, 0.071, 'mejia-scott-ryan', 'Quantity Surveyors manage costs and budgets for construction projects. They estimate expenses, assess contracts, and ensure financial efficiency throughout the project lifecycle. Mejia, Scott & Ryan is a reputable firm offering quantity surveying services.'),

('Ship broker', 177000, 0, 'hall-davis', 'Ship Brokers facilitate the buying and selling of ships and maritime assets. They act as intermediaries between shipowners and potential buyers, ensuring smooth transactions. Hall-Davis specializes in ship brokerage, offering comprehensive services to the maritime industry.'),

('Bookseller', 164000, 0, 'reynolds-greene', 'Booksellers are professionals who manage and operate bookstores. They curate book collections, assist customers, and contribute to the promotion of literature. Reynolds-Greene is a bookshop known for its diverse selection and commitment to fostering a love of reading.'),

('Medical sales representative', 196000, 0, 'hall-mills', 'Medical Sales Representatives promote and sell pharmaceutical or medical products to healthcare professionals. They build relationships with clients and provide information on products and services. Hall-Mills is a company known for its excellence in medical sales.'),

('Copy', 103000, 0, 'foster-rice', 'Copywriters create written content for advertising and marketing purposes. They craft persuasive and engaging copy to promote products or convey brand messages. Foster-Rice is an agency known for its creative and effective copywriting services.'),

('Engineer, broadcasting (operations)', 86000, 0, 'baker-santos', 'Broadcasting Operations Engineers manage the technical aspects of radio or television broadcasting. They ensure smooth operations of equipment and systems. Baker-Santos is a company specializing in broadcasting engineering, providing reliable technical solutions.'),

('Fashion designer', 137000, 0, 'reynolds-greene', 'Fashion Designers create clothing and accessory designs. They follow trends, develop unique styles, and contribute to the fashion industry''s creative landscape. Reynolds-Greene is a fashion design studio known for its innovative and stylish creations.'),

('Learning disability nurse', 66000, NULL, 'ayala-buchanan', 'Learning Disability Nurses specialize in providing healthcare to individuals with learning disabilities. They assess needs, develop care plans, and support individuals in achieving their health and well-being goals. Ayala-Buchanan is recognized for its commitment to inclusive healthcare.'),

('Research scientist (medical)', 175000, NULL, 'norman-harvey', 'Medical Research Scientists conduct studies to advance understanding in medical fields. They contribute to scientific knowledge, often working in laboratories or research institutions. Norman-Harvey is a center known for medical research excellence.'),

('Accommodation manager', 126000, NULL, 'mejia-scott-ryan', 'Accommodation Managers oversee the operations of lodging facilities such as hotels or resorts. They ensure guest satisfaction, manage staff, and coordinate various aspects of accommodation services. Mejia, Scott & Ryan is a hospitality management firm with a focus on exceptional guest experiences.');
