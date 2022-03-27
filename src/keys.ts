const keys = [
  {
    "name": "Exchange",
    "id": "fs_exch",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "AMEX",
        "value": "amex"
      },
      {
        "OptionName": "NASDAQ",
        "value": "nasd"
      },
      {
        "OptionName": "NYSE",
        "value": "nyse"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Index",
    "id": "fs_idx",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "S&amp;P 500",
        "value": "sp500"
      },
      {
        "OptionName": "DJIA",
        "value": "dji"
      }
    ]
  },
  {
    "name": "Sector",
    "id": "fs_sec",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Basic Materials",
        "value": "basicmaterials"
      },
      {
        "OptionName": "Communication Services",
        "value": "communicationservices"
      },
      {
        "OptionName": "Consumer Cyclical",
        "value": "consumercyclical"
      },
      {
        "OptionName": "Consumer Defensive",
        "value": "consumerdefensive"
      },
      {
        "OptionName": "Energy",
        "value": "energy"
      },
      {
        "OptionName": "Financial",
        "value": "financial"
      },
      {
        "OptionName": "Healthcare",
        "value": "healthcare"
      },
      {
        "OptionName": "Industrials",
        "value": "industrials"
      },
      {
        "OptionName": "Real Estate",
        "value": "realestate"
      },
      {
        "OptionName": "Technology",
        "value": "technology"
      },
      {
        "OptionName": "Utilities",
        "value": "utilities"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Industry",
    "id": "fs_ind",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Stocks only (ex-Funds)",
        "value": "stocksonly"
      },
      {
        "OptionName": "Exchange Traded Fund",
        "value": "exchangetradedfund"
      },
      {
        "OptionName": "Advertising Agencies",
        "value": "advertisingagencies"
      },
      {
        "OptionName": "Aerospace &amp; Defense",
        "value": "aerospacedefense"
      },
      {
        "OptionName": "Agricultural Inputs",
        "value": "agriculturalinputs"
      },
      {
        "OptionName": "Airlines",
        "value": "airlines"
      },
      {
        "OptionName": "Airports &amp; Air Services",
        "value": "airportsairservices"
      },
      {
        "OptionName": "Aluminum",
        "value": "aluminum"
      },
      {
        "OptionName": "Apparel Manufacturing",
        "value": "apparelmanufacturing"
      },
      {
        "OptionName": "Apparel Retail",
        "value": "apparelretail"
      },
      {
        "OptionName": "Asset Management",
        "value": "assetmanagement"
      },
      {
        "OptionName": "Auto Manufacturers",
        "value": "automanufacturers"
      },
      {
        "OptionName": "Auto Parts",
        "value": "autoparts"
      },
      {
        "OptionName": "Auto &amp; Truck Dealerships",
        "value": "autotruckdealerships"
      },
      {
        "OptionName": "Banks - Diversified",
        "value": "banksdiversified"
      },
      {
        "OptionName": "Banks - Regional",
        "value": "banksregional"
      },
      {
        "OptionName": "Beverages - Brewers",
        "value": "beveragesbrewers"
      },
      {
        "OptionName": "Beverages - Non-Alcoholic",
        "value": "beveragesnonalcoholic"
      },
      {
        "OptionName": "Beverages - Wineries &amp; Distilleries",
        "value": "beverageswineriesdistilleries"
      },
      {
        "OptionName": "Biotechnology",
        "value": "biotechnology"
      },
      {
        "OptionName": "Broadcasting",
        "value": "broadcasting"
      },
      {
        "OptionName": "Building Materials",
        "value": "buildingmaterials"
      },
      {
        "OptionName": "Building Products &amp; Equipment",
        "value": "buildingproductsequipment"
      },
      {
        "OptionName": "Business Equipment &amp; Supplies",
        "value": "businessequipmentsupplies"
      },
      {
        "OptionName": "Capital Markets",
        "value": "capitalmarkets"
      },
      {
        "OptionName": "Chemicals",
        "value": "chemicals"
      },
      {
        "OptionName": "Closed-End Fund - Debt",
        "value": "closedendfunddebt"
      },
      {
        "OptionName": "Closed-End Fund - Equity",
        "value": "closedendfundequity"
      },
      {
        "OptionName": "Closed-End Fund - Foreign",
        "value": "closedendfundforeign"
      },
      {
        "OptionName": "Coking Coal",
        "value": "cokingcoal"
      },
      {
        "OptionName": "Communication Equipment",
        "value": "communicationequipment"
      },
      {
        "OptionName": "Computer Hardware",
        "value": "computerhardware"
      },
      {
        "OptionName": "Confectioners",
        "value": "confectioners"
      },
      {
        "OptionName": "Conglomerates",
        "value": "conglomerates"
      },
      {
        "OptionName": "Consulting Services",
        "value": "consultingservices"
      },
      {
        "OptionName": "Consumer Electronics",
        "value": "consumerelectronics"
      },
      {
        "OptionName": "Copper",
        "value": "copper"
      },
      {
        "OptionName": "Credit Services",
        "value": "creditservices"
      },
      {
        "OptionName": "Department Stores",
        "value": "departmentstores"
      },
      {
        "OptionName": "Diagnostics &amp; Research",
        "value": "diagnosticsresearch"
      },
      {
        "OptionName": "Discount Stores",
        "value": "discountstores"
      },
      {
        "OptionName": "Drug Manufacturers - General",
        "value": "drugmanufacturersgeneral"
      },
      {
        "OptionName": "Drug Manufacturers - Specialty &amp; Generic",
        "value": "drugmanufacturersspecialtygeneric"
      },
      {
        "OptionName": "Education &amp; Training Services",
        "value": "educationtrainingservices"
      },
      {
        "OptionName": "Electrical Equipment &amp; Parts",
        "value": "electricalequipmentparts"
      },
      {
        "OptionName": "Electronic Components",
        "value": "electroniccomponents"
      },
      {
        "OptionName": "Electronic Gaming &amp; Multimedia",
        "value": "electronicgamingmultimedia"
      },
      {
        "OptionName": "Electronics &amp; Computer Distribution",
        "value": "electronicscomputerdistribution"
      },
      {
        "OptionName": "Engineering &amp; Construction",
        "value": "engineeringconstruction"
      },
      {
        "OptionName": "Entertainment",
        "value": "entertainment"
      },
      {
        "OptionName": "Exchange Traded Fund",
        "value": "exchangetradedfund"
      },
      {
        "OptionName": "Farm &amp; Heavy Construction Machinery",
        "value": "farmheavyconstructionmachinery"
      },
      {
        "OptionName": "Farm Products",
        "value": "farmproducts"
      },
      {
        "OptionName": "Financial Conglomerates",
        "value": "financialconglomerates"
      },
      {
        "OptionName": "Financial Data &amp; Stock Exchanges",
        "value": "financialdatastockexchanges"
      },
      {
        "OptionName": "Food Distribution",
        "value": "fooddistribution"
      },
      {
        "OptionName": "Footwear &amp; Accessories",
        "value": "footwearaccessories"
      },
      {
        "OptionName": "Furnishings, Fixtures &amp; Appliances",
        "value": "furnishingsfixturesappliances"
      },
      {
        "OptionName": "Gambling",
        "value": "gambling"
      },
      {
        "OptionName": "Gold",
        "value": "gold"
      },
      {
        "OptionName": "Grocery Stores",
        "value": "grocerystores"
      },
      {
        "OptionName": "Healthcare Plans",
        "value": "healthcareplans"
      },
      {
        "OptionName": "Health Information Services",
        "value": "healthinformationservices"
      },
      {
        "OptionName": "Home Improvement Retail",
        "value": "homeimprovementretail"
      },
      {
        "OptionName": "Household &amp; Personal Products",
        "value": "householdpersonalproducts"
      },
      {
        "OptionName": "Industrial Distribution",
        "value": "industrialdistribution"
      },
      {
        "OptionName": "Information Technology Services",
        "value": "informationtechnologyservices"
      },
      {
        "OptionName": "Infrastructure Operations",
        "value": "infrastructureoperations"
      },
      {
        "OptionName": "Insurance Brokers",
        "value": "insurancebrokers"
      },
      {
        "OptionName": "Insurance - Diversified",
        "value": "insurancediversified"
      },
      {
        "OptionName": "Insurance - Life",
        "value": "insurancelife"
      },
      {
        "OptionName": "Insurance - Property &amp; Casualty",
        "value": "insurancepropertycasualty"
      },
      {
        "OptionName": "Insurance - Reinsurance",
        "value": "insurancereinsurance"
      },
      {
        "OptionName": "Insurance - Specialty",
        "value": "insurancespecialty"
      },
      {
        "OptionName": "Integrated Freight &amp; Logistics",
        "value": "integratedfreightlogistics"
      },
      {
        "OptionName": "Internet Content &amp; Information",
        "value": "internetcontentinformation"
      },
      {
        "OptionName": "Internet Retail",
        "value": "internetretail"
      },
      {
        "OptionName": "Leisure",
        "value": "leisure"
      },
      {
        "OptionName": "Lodging",
        "value": "lodging"
      },
      {
        "OptionName": "Lumber &amp; Wood Production",
        "value": "lumberwoodproduction"
      },
      {
        "OptionName": "Luxury Goods",
        "value": "luxurygoods"
      },
      {
        "OptionName": "Marine Shipping",
        "value": "marineshipping"
      },
      {
        "OptionName": "Medical Care Facilities",
        "value": "medicalcarefacilities"
      },
      {
        "OptionName": "Medical Devices",
        "value": "medicaldevices"
      },
      {
        "OptionName": "Medical Distribution",
        "value": "medicaldistribution"
      },
      {
        "OptionName": "Medical Instruments &amp; Supplies",
        "value": "medicalinstrumentssupplies"
      },
      {
        "OptionName": "Metal Fabrication",
        "value": "metalfabrication"
      },
      {
        "OptionName": "Mortgage Finance",
        "value": "mortgagefinance"
      },
      {
        "OptionName": "Oil &amp; Gas Drilling",
        "value": "oilgasdrilling"
      },
      {
        "OptionName": "Oil &amp; Gas E&amp;P",
        "value": "oilgasep"
      },
      {
        "OptionName": "Oil &amp; Gas Equipment &amp; Services",
        "value": "oilgasequipmentservices"
      },
      {
        "OptionName": "Oil &amp; Gas Integrated",
        "value": "oilgasintegrated"
      },
      {
        "OptionName": "Oil &amp; Gas Midstream",
        "value": "oilgasmidstream"
      },
      {
        "OptionName": "Oil &amp; Gas Refining &amp; Marketing",
        "value": "oilgasrefiningmarketing"
      },
      {
        "OptionName": "Other Industrial Metals &amp; Mining",
        "value": "otherindustrialmetalsmining"
      },
      {
        "OptionName": "Other Precious Metals &amp; Mining",
        "value": "otherpreciousmetalsmining"
      },
      {
        "OptionName": "Packaged Foods",
        "value": "packagedfoods"
      },
      {
        "OptionName": "Packaging &amp; Containers",
        "value": "packagingcontainers"
      },
      {
        "OptionName": "Paper &amp; Paper Products",
        "value": "paperpaperproducts"
      },
      {
        "OptionName": "Personal Services",
        "value": "personalservices"
      },
      {
        "OptionName": "Pharmaceutical Retailers",
        "value": "pharmaceuticalretailers"
      },
      {
        "OptionName": "Pollution &amp; Treatment Controls",
        "value": "pollutiontreatmentcontrols"
      },
      {
        "OptionName": "Publishing",
        "value": "publishing"
      },
      {
        "OptionName": "Railroads",
        "value": "railroads"
      },
      {
        "OptionName": "Real Estate - Development",
        "value": "realestatedevelopment"
      },
      {
        "OptionName": "Real Estate - Diversified",
        "value": "realestatediversified"
      },
      {
        "OptionName": "Real Estate Services",
        "value": "realestateservices"
      },
      {
        "OptionName": "Recreational Vehicles",
        "value": "recreationalvehicles"
      },
      {
        "OptionName": "REIT - Diversified",
        "value": "reitdiversified"
      },
      {
        "OptionName": "REIT - Healthcare Facilities",
        "value": "reithealthcarefacilities"
      },
      {
        "OptionName": "REIT - Hotel &amp; Motel",
        "value": "reithotelmotel"
      },
      {
        "OptionName": "REIT - Industrial",
        "value": "reitindustrial"
      },
      {
        "OptionName": "REIT - Mortgage",
        "value": "reitmortgage"
      },
      {
        "OptionName": "REIT - Office",
        "value": "reitoffice"
      },
      {
        "OptionName": "REIT - Residential",
        "value": "reitresidential"
      },
      {
        "OptionName": "REIT - Retail",
        "value": "reitretail"
      },
      {
        "OptionName": "REIT - Specialty",
        "value": "reitspecialty"
      },
      {
        "OptionName": "Rental &amp; Leasing Services",
        "value": "rentalleasingservices"
      },
      {
        "OptionName": "Residential Construction",
        "value": "residentialconstruction"
      },
      {
        "OptionName": "Resorts &amp; Casinos",
        "value": "resortscasinos"
      },
      {
        "OptionName": "Restaurants",
        "value": "restaurants"
      },
      {
        "OptionName": "Scientific &amp; Technical Instruments",
        "value": "scientifictechnicalinstruments"
      },
      {
        "OptionName": "Security &amp; Protection Services",
        "value": "securityprotectionservices"
      },
      {
        "OptionName": "Semiconductor Equipment &amp; Materials",
        "value": "semiconductorequipmentmaterials"
      },
      {
        "OptionName": "Semiconductors",
        "value": "semiconductors"
      },
      {
        "OptionName": "Shell Companies",
        "value": "shellcompanies"
      },
      {
        "OptionName": "Silver",
        "value": "silver"
      },
      {
        "OptionName": "Software - Application",
        "value": "softwareapplication"
      },
      {
        "OptionName": "Software - Infrastructure",
        "value": "softwareinfrastructure"
      },
      {
        "OptionName": "Solar",
        "value": "solar"
      },
      {
        "OptionName": "Specialty Business Services",
        "value": "specialtybusinessservices"
      },
      {
        "OptionName": "Specialty Chemicals",
        "value": "specialtychemicals"
      },
      {
        "OptionName": "Specialty Industrial Machinery",
        "value": "specialtyindustrialmachinery"
      },
      {
        "OptionName": "Specialty Retail",
        "value": "specialtyretail"
      },
      {
        "OptionName": "Staffing &amp; Employment Services",
        "value": "staffingemploymentservices"
      },
      {
        "OptionName": "Steel",
        "value": "steel"
      },
      {
        "OptionName": "Telecom Services",
        "value": "telecomservices"
      },
      {
        "OptionName": "Textile Manufacturing",
        "value": "textilemanufacturing"
      },
      {
        "OptionName": "Thermal Coal",
        "value": "thermalcoal"
      },
      {
        "OptionName": "Tobacco",
        "value": "tobacco"
      },
      {
        "OptionName": "Tools &amp; Accessories",
        "value": "toolsaccessories"
      },
      {
        "OptionName": "Travel Services",
        "value": "travelservices"
      },
      {
        "OptionName": "Trucking",
        "value": "trucking"
      },
      {
        "OptionName": "Uranium",
        "value": "uranium"
      },
      {
        "OptionName": "Utilities - Diversified",
        "value": "utilitiesdiversified"
      },
      {
        "OptionName": "Utilities - Independent Power Producers",
        "value": "utilitiesindependentpowerproducers"
      },
      {
        "OptionName": "Utilities - Regulated Electric",
        "value": "utilitiesregulatedelectric"
      },
      {
        "OptionName": "Utilities - Regulated Gas",
        "value": "utilitiesregulatedgas"
      },
      {
        "OptionName": "Utilities - Regulated Water",
        "value": "utilitiesregulatedwater"
      },
      {
        "OptionName": "Utilities - Renewable",
        "value": "utilitiesrenewable"
      },
      {
        "OptionName": "Waste Management",
        "value": "wastemanagement"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Country",
    "id": "fs_geo",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "USA",
        "value": "usa"
      },
      {
        "OptionName": "Foreign (ex-USA)",
        "value": "notusa"
      },
      {
        "OptionName": "Asia",
        "value": "asia"
      },
      {
        "OptionName": "Europe",
        "value": "europe"
      },
      {
        "OptionName": "Latin America",
        "value": "latinamerica"
      },
      {
        "OptionName": "BRIC",
        "value": "bric"
      },
      {
        "OptionName": "Argentina",
        "value": "argentina"
      },
      {
        "OptionName": "Australia",
        "value": "australia"
      },
      {
        "OptionName": "Bahamas",
        "value": "bahamas"
      },
      {
        "OptionName": "Belgium",
        "value": "belgium"
      },
      {
        "OptionName": "BeNeLux",
        "value": "benelux"
      },
      {
        "OptionName": "Bermuda",
        "value": "bermuda"
      },
      {
        "OptionName": "Brazil",
        "value": "brazil"
      },
      {
        "OptionName": "Canada",
        "value": "canada"
      },
      {
        "OptionName": "Cayman Islands",
        "value": "caymanislands"
      },
      {
        "OptionName": "Chile",
        "value": "chile"
      },
      {
        "OptionName": "China",
        "value": "china"
      },
      {
        "OptionName": "China &amp; Hong Kong",
        "value": "chinahongkong"
      },
      {
        "OptionName": "Colombia",
        "value": "colombia"
      },
      {
        "OptionName": "Cyprus",
        "value": "cyprus"
      },
      {
        "OptionName": "Denmark",
        "value": "denmark"
      },
      {
        "OptionName": "Finland",
        "value": "finland"
      },
      {
        "OptionName": "France",
        "value": "france"
      },
      {
        "OptionName": "Germany",
        "value": "germany"
      },
      {
        "OptionName": "Greece",
        "value": "greece"
      },
      {
        "OptionName": "Hong Kong",
        "value": "hongkong"
      },
      {
        "OptionName": "Hungary",
        "value": "hungary"
      },
      {
        "OptionName": "Iceland",
        "value": "iceland"
      },
      {
        "OptionName": "India",
        "value": "india"
      },
      {
        "OptionName": "Indonesia",
        "value": "indonesia"
      },
      {
        "OptionName": "Ireland",
        "value": "ireland"
      },
      {
        "OptionName": "Israel",
        "value": "israel"
      },
      {
        "OptionName": "Italy",
        "value": "italy"
      },
      {
        "OptionName": "Japan",
        "value": "japan"
      },
      {
        "OptionName": "Kazakhstan",
        "value": "kazakhstan"
      },
      {
        "OptionName": "Luxembourg",
        "value": "luxembourg"
      },
      {
        "OptionName": "Malaysia",
        "value": "malaysia"
      },
      {
        "OptionName": "Malta",
        "value": "malta"
      },
      {
        "OptionName": "Mexico",
        "value": "mexico"
      },
      {
        "OptionName": "Monaco",
        "value": "monaco"
      },
      {
        "OptionName": "Netherlands",
        "value": "netherlands"
      },
      {
        "OptionName": "New Zealand",
        "value": "newzealand"
      },
      {
        "OptionName": "Norway",
        "value": "norway"
      },
      {
        "OptionName": "Panama",
        "value": "panama"
      },
      {
        "OptionName": "Peru",
        "value": "peru"
      },
      {
        "OptionName": "Philippines",
        "value": "philippines"
      },
      {
        "OptionName": "Portugal",
        "value": "portugal"
      },
      {
        "OptionName": "Russia",
        "value": "russia"
      },
      {
        "OptionName": "Singapore",
        "value": "singapore"
      },
      {
        "OptionName": "South Africa",
        "value": "southafrica"
      },
      {
        "OptionName": "South Korea",
        "value": "southkorea"
      },
      {
        "OptionName": "Spain",
        "value": "spain"
      },
      {
        "OptionName": "Sweden",
        "value": "sweden"
      },
      {
        "OptionName": "Switzerland",
        "value": "switzerland"
      },
      {
        "OptionName": "Taiwan",
        "value": "taiwan"
      },
      {
        "OptionName": "Turkey",
        "value": "turkey"
      },
      {
        "OptionName": "United Arab Emirates",
        "value": "unitedarabemirates"
      },
      {
        "OptionName": "United Kingdom",
        "value": "unitedkingdom"
      },
      {
        "OptionName": "Uruguay",
        "value": "uruguay"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Market Cap.",
    "id": "fs_cap",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Mega ($200bln and more)",
        "value": "mega"
      },
      {
        "OptionName": "Large ($10bln to $200bln)",
        "value": "large"
      },
      {
        "OptionName": "Mid ($2bln to $10bln)",
        "value": "mid"
      },
      {
        "OptionName": "Small ($300mln to $2bln)",
        "value": "small"
      },
      {
        "OptionName": "Micro ($50mln to $300mln)",
        "value": "micro"
      },
      {
        "OptionName": "Nano (under $50mln)",
        "value": "nano"
      },
      {
        "OptionName": "+Large (over $10bln)",
        "value": "largeover"
      },
      {
        "OptionName": "+Mid (over $2bln)",
        "value": "midover"
      },
      {
        "OptionName": "+Small (over $300mln)",
        "value": "smallover"
      },
      {
        "OptionName": "+Micro (over $50mln)",
        "value": "microover"
      },
      {
        "OptionName": "-Large (under $200bln)",
        "value": "largeunder"
      },
      {
        "OptionName": "-Mid (under $10bln)",
        "value": "midunder"
      },
      {
        "OptionName": "-Small (under $2bln)",
        "value": "smallunder"
      },
      {
        "OptionName": "-Micro (under $300mln)",
        "value": "microunder"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "P/E",
    "id": "fs_fa_pe",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;15)",
        "value": "low"
      },
      {
        "OptionName": "Profitable (&gt;0)",
        "value": "profitable"
      },
      {
        "OptionName": "High (&gt;50)",
        "value": "high"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Under 15",
        "value": "u15"
      },
      {
        "OptionName": "Under 20",
        "value": "u20"
      },
      {
        "OptionName": "Under 25",
        "value": "u25"
      },
      {
        "OptionName": "Under 30",
        "value": "u30"
      },
      {
        "OptionName": "Under 35",
        "value": "u35"
      },
      {
        "OptionName": "Under 40",
        "value": "u40"
      },
      {
        "OptionName": "Under 45",
        "value": "u45"
      },
      {
        "OptionName": "Under 50",
        "value": "u50"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Over 15",
        "value": "o15"
      },
      {
        "OptionName": "Over 20",
        "value": "o20"
      },
      {
        "OptionName": "Over 25",
        "value": "o25"
      },
      {
        "OptionName": "Over 30",
        "value": "o30"
      },
      {
        "OptionName": "Over 35",
        "value": "o35"
      },
      {
        "OptionName": "Over 40",
        "value": "o40"
      },
      {
        "OptionName": "Over 45",
        "value": "o45"
      },
      {
        "OptionName": "Over 50",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Forward P/E",
    "id": "fs_fa_fpe",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;15)",
        "value": "low"
      },
      {
        "OptionName": "Profitable (&gt;0)",
        "value": "profitable"
      },
      {
        "OptionName": "High (&gt;50)",
        "value": "high"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Under 15",
        "value": "u15"
      },
      {
        "OptionName": "Under 20",
        "value": "u20"
      },
      {
        "OptionName": "Under 25",
        "value": "u25"
      },
      {
        "OptionName": "Under 30",
        "value": "u30"
      },
      {
        "OptionName": "Under 35",
        "value": "u35"
      },
      {
        "OptionName": "Under 40",
        "value": "u40"
      },
      {
        "OptionName": "Under 45",
        "value": "u45"
      },
      {
        "OptionName": "Under 50",
        "value": "u50"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Over 15",
        "value": "o15"
      },
      {
        "OptionName": "Over 20",
        "value": "o20"
      },
      {
        "OptionName": "Over 25",
        "value": "o25"
      },
      {
        "OptionName": "Over 30",
        "value": "o30"
      },
      {
        "OptionName": "Over 35",
        "value": "o35"
      },
      {
        "OptionName": "Over 40",
        "value": "o40"
      },
      {
        "OptionName": "Over 45",
        "value": "o45"
      },
      {
        "OptionName": "Over 50",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "PEG",
    "id": "fs_fa_peg",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;1)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;2)",
        "value": "high"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 3",
        "value": "u3"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "P/S",
    "id": "fs_fa_ps",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;1)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;10)",
        "value": "high"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 3",
        "value": "u3"
      },
      {
        "OptionName": "Under 4",
        "value": "u4"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 6",
        "value": "u6"
      },
      {
        "OptionName": "Under 7",
        "value": "u7"
      },
      {
        "OptionName": "Under 8",
        "value": "u8"
      },
      {
        "OptionName": "Under 9",
        "value": "u9"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 6",
        "value": "o6"
      },
      {
        "OptionName": "Over 7",
        "value": "o7"
      },
      {
        "OptionName": "Over 8",
        "value": "o8"
      },
      {
        "OptionName": "Over 9",
        "value": "o9"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "P/B",
    "id": "fs_fa_pb",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;1)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;5)",
        "value": "high"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 3",
        "value": "u3"
      },
      {
        "OptionName": "Under 4",
        "value": "u4"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 6",
        "value": "u6"
      },
      {
        "OptionName": "Under 7",
        "value": "u7"
      },
      {
        "OptionName": "Under 8",
        "value": "u8"
      },
      {
        "OptionName": "Under 9",
        "value": "u9"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 6",
        "value": "o6"
      },
      {
        "OptionName": "Over 7",
        "value": "o7"
      },
      {
        "OptionName": "Over 8",
        "value": "o8"
      },
      {
        "OptionName": "Over 9",
        "value": "o9"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Price/Cash",
    "id": "fs_fa_pc",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;3)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;50)",
        "value": "high"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 3",
        "value": "u3"
      },
      {
        "OptionName": "Under 4",
        "value": "u4"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 6",
        "value": "u6"
      },
      {
        "OptionName": "Under 7",
        "value": "u7"
      },
      {
        "OptionName": "Under 8",
        "value": "u8"
      },
      {
        "OptionName": "Under 9",
        "value": "u9"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 6",
        "value": "o6"
      },
      {
        "OptionName": "Over 7",
        "value": "o7"
      },
      {
        "OptionName": "Over 8",
        "value": "o8"
      },
      {
        "OptionName": "Over 9",
        "value": "o9"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Over 20",
        "value": "o20"
      },
      {
        "OptionName": "Over 30",
        "value": "o30"
      },
      {
        "OptionName": "Over 40",
        "value": "o40"
      },
      {
        "OptionName": "Over 50",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Price/Free Cash Flow",
    "id": "fs_fa_pfcf",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;15)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;50)",
        "value": "high"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Under 10",
        "value": "u10"
      },
      {
        "OptionName": "Under 15",
        "value": "u15"
      },
      {
        "OptionName": "Under 20",
        "value": "u20"
      },
      {
        "OptionName": "Under 25",
        "value": "u25"
      },
      {
        "OptionName": "Under 30",
        "value": "u30"
      },
      {
        "OptionName": "Under 35",
        "value": "u35"
      },
      {
        "OptionName": "Under 40",
        "value": "u40"
      },
      {
        "OptionName": "Under 45",
        "value": "u45"
      },
      {
        "OptionName": "Under 50",
        "value": "u50"
      },
      {
        "OptionName": "Under 60",
        "value": "u60"
      },
      {
        "OptionName": "Under 70",
        "value": "u70"
      },
      {
        "OptionName": "Under 80",
        "value": "u80"
      },
      {
        "OptionName": "Under 90",
        "value": "u90"
      },
      {
        "OptionName": "Under 100",
        "value": "u100"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Over 15",
        "value": "o15"
      },
      {
        "OptionName": "Over 20",
        "value": "o20"
      },
      {
        "OptionName": "Over 25",
        "value": "o25"
      },
      {
        "OptionName": "Over 30",
        "value": "o30"
      },
      {
        "OptionName": "Over 35",
        "value": "o35"
      },
      {
        "OptionName": "Over 40",
        "value": "o40"
      },
      {
        "OptionName": "Over 45",
        "value": "o45"
      },
      {
        "OptionName": "Over 50",
        "value": "o50"
      },
      {
        "OptionName": "Over 60",
        "value": "o60"
      },
      {
        "OptionName": "Over 70",
        "value": "o70"
      },
      {
        "OptionName": "Over 80",
        "value": "o80"
      },
      {
        "OptionName": "Over 90",
        "value": "o90"
      },
      {
        "OptionName": "Over 100",
        "value": "o100"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "EPS growth<br>this year",
    "id": "fs_fa_epsyoy",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "EPS growth<br>next year",
    "id": "fs_fa_epsyoy1",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "EPS growth<br>past 5 years",
    "id": "fs_fa_eps5years",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "EPS growth<br>next 5 years",
    "id": "fs_fa_estltgrowth",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (&lt;10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Sales growth<br>past 5 years",
    "id": "fs_fa_sales5years",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "EPS growth<br>qtr over qtr",
    "id": "fs_fa_epsqoq",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Sales growth<br>qtr over qtr",
    "id": "fs_fa_salesqoq",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Positive Low (0-10%)",
        "value": "poslow"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Dividend Yield",
    "id": "fs_fa_div",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "None (0%)",
        "value": "none"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "High (&gt;5%)",
        "value": "high"
      },
      {
        "OptionName": "Very High (&gt;10%)",
        "value": "veryhigh"
      },
      {
        "OptionName": "Over 1%",
        "value": "o1"
      },
      {
        "OptionName": "Over 2%",
        "value": "o2"
      },
      {
        "OptionName": "Over 3%",
        "value": "o3"
      },
      {
        "OptionName": "Over 4%",
        "value": "o4"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 6%",
        "value": "o6"
      },
      {
        "OptionName": "Over 7%",
        "value": "o7"
      },
      {
        "OptionName": "Over 8%",
        "value": "o8"
      },
      {
        "OptionName": "Over 9%",
        "value": "o9"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Return on Assets",
    "id": "fs_fa_roa",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Very Positive (&gt;15%)",
        "value": "verypos"
      },
      {
        "OptionName": "Very Negative (&lt;-15%)",
        "value": "veryneg"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -45%",
        "value": "u-45"
      },
      {
        "OptionName": "Under -40%",
        "value": "u-40"
      },
      {
        "OptionName": "Under -35%",
        "value": "u-35"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -25%",
        "value": "u-25"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -15%",
        "value": "u-15"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -5%",
        "value": "u-5"
      },
      {
        "OptionName": "Over +5%",
        "value": "o5"
      },
      {
        "OptionName": "Over +10%",
        "value": "o10"
      },
      {
        "OptionName": "Over +15%",
        "value": "o15"
      },
      {
        "OptionName": "Over +20%",
        "value": "o20"
      },
      {
        "OptionName": "Over +25%",
        "value": "o25"
      },
      {
        "OptionName": "Over +30%",
        "value": "o30"
      },
      {
        "OptionName": "Over +35%",
        "value": "o35"
      },
      {
        "OptionName": "Over +40%",
        "value": "o40"
      },
      {
        "OptionName": "Over +45%",
        "value": "o45"
      },
      {
        "OptionName": "Over +50%",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Return on Equity",
    "id": "fs_fa_roe",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Very Positive (&gt;30%)",
        "value": "verypos"
      },
      {
        "OptionName": "Very Negative (&lt;-15%)",
        "value": "veryneg"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -45%",
        "value": "u-45"
      },
      {
        "OptionName": "Under -40%",
        "value": "u-40"
      },
      {
        "OptionName": "Under -35%",
        "value": "u-35"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -25%",
        "value": "u-25"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -15%",
        "value": "u-15"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -5%",
        "value": "u-5"
      },
      {
        "OptionName": "Over +5%",
        "value": "o5"
      },
      {
        "OptionName": "Over +10%",
        "value": "o10"
      },
      {
        "OptionName": "Over +15%",
        "value": "o15"
      },
      {
        "OptionName": "Over +20%",
        "value": "o20"
      },
      {
        "OptionName": "Over +25%",
        "value": "o25"
      },
      {
        "OptionName": "Over +30%",
        "value": "o30"
      },
      {
        "OptionName": "Over +35%",
        "value": "o35"
      },
      {
        "OptionName": "Over +40%",
        "value": "o40"
      },
      {
        "OptionName": "Over +45%",
        "value": "o45"
      },
      {
        "OptionName": "Over +50%",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Return on Investment",
    "id": "fs_fa_roi",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Very Positive (&gt;25%)",
        "value": "verypos"
      },
      {
        "OptionName": "Very Negative (&lt;-10%)",
        "value": "veryneg"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -45%",
        "value": "u-45"
      },
      {
        "OptionName": "Under -40%",
        "value": "u-40"
      },
      {
        "OptionName": "Under -35%",
        "value": "u-35"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -25%",
        "value": "u-25"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -15%",
        "value": "u-15"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -5%",
        "value": "u-5"
      },
      {
        "OptionName": "Over +5%",
        "value": "o5"
      },
      {
        "OptionName": "Over +10%",
        "value": "o10"
      },
      {
        "OptionName": "Over +15%",
        "value": "o15"
      },
      {
        "OptionName": "Over +20%",
        "value": "o20"
      },
      {
        "OptionName": "Over +25%",
        "value": "o25"
      },
      {
        "OptionName": "Over +30%",
        "value": "o30"
      },
      {
        "OptionName": "Over +35%",
        "value": "o35"
      },
      {
        "OptionName": "Over +40%",
        "value": "o40"
      },
      {
        "OptionName": "Over +45%",
        "value": "o45"
      },
      {
        "OptionName": "Over +50%",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Current Ratio",
    "id": "fs_fa_curratio",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "High (&gt;3)",
        "value": "high"
      },
      {
        "OptionName": "Low (&lt;1)",
        "value": "low"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 1.5",
        "value": "o1.5"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Quick Ratio",
    "id": "fs_fa_quickratio",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "High (&gt;3)",
        "value": "high"
      },
      {
        "OptionName": "Low (&lt;0.5)",
        "value": "low"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 1.5",
        "value": "o1.5"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "LT Debt/Equity",
    "id": "fs_fa_ltdebteq",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "High (&gt;0.5)",
        "value": "high"
      },
      {
        "OptionName": "Low (&lt;0.1)",
        "value": "low"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 0.9",
        "value": "u0.9"
      },
      {
        "OptionName": "Under 0.8",
        "value": "u0.8"
      },
      {
        "OptionName": "Under 0.7",
        "value": "u0.7"
      },
      {
        "OptionName": "Under 0.6",
        "value": "u0.6"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Under 0.4",
        "value": "u0.4"
      },
      {
        "OptionName": "Under 0.3",
        "value": "u0.3"
      },
      {
        "OptionName": "Under 0.2",
        "value": "u0.2"
      },
      {
        "OptionName": "Under 0.1",
        "value": "u0.1"
      },
      {
        "OptionName": "Over 0.1",
        "value": "o0.1"
      },
      {
        "OptionName": "Over 0.2",
        "value": "o0.2"
      },
      {
        "OptionName": "Over 0.3",
        "value": "o0.3"
      },
      {
        "OptionName": "Over 0.4",
        "value": "o0.4"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 0.6",
        "value": "o0.6"
      },
      {
        "OptionName": "Over 0.7",
        "value": "o0.7"
      },
      {
        "OptionName": "Over 0.8",
        "value": "o0.8"
      },
      {
        "OptionName": "Over 0.9",
        "value": "o0.9"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Debt/Equity",
    "id": "fs_fa_debteq",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "High (&gt;0.5)",
        "value": "high"
      },
      {
        "OptionName": "Low (&lt;0.1)",
        "value": "low"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 0.9",
        "value": "u0.9"
      },
      {
        "OptionName": "Under 0.8",
        "value": "u0.8"
      },
      {
        "OptionName": "Under 0.7",
        "value": "u0.7"
      },
      {
        "OptionName": "Under 0.6",
        "value": "u0.6"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Under 0.4",
        "value": "u0.4"
      },
      {
        "OptionName": "Under 0.3",
        "value": "u0.3"
      },
      {
        "OptionName": "Under 0.2",
        "value": "u0.2"
      },
      {
        "OptionName": "Under 0.1",
        "value": "u0.1"
      },
      {
        "OptionName": "Over 0.1",
        "value": "o0.1"
      },
      {
        "OptionName": "Over 0.2",
        "value": "o0.2"
      },
      {
        "OptionName": "Over 0.3",
        "value": "o0.3"
      },
      {
        "OptionName": "Over 0.4",
        "value": "o0.4"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 0.6",
        "value": "o0.6"
      },
      {
        "OptionName": "Over 0.7",
        "value": "o0.7"
      },
      {
        "OptionName": "Over 0.8",
        "value": "o0.8"
      },
      {
        "OptionName": "Over 0.9",
        "value": "o0.9"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Gross Margin",
    "id": "fs_fa_grossmargin",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "High (&gt;50%)",
        "value": "high"
      },
      {
        "OptionName": "Under 90%",
        "value": "u90"
      },
      {
        "OptionName": "Under 80%",
        "value": "u80"
      },
      {
        "OptionName": "Under 70%",
        "value": "u70"
      },
      {
        "OptionName": "Under 60%",
        "value": "u60"
      },
      {
        "OptionName": "Under 50%",
        "value": "u50"
      },
      {
        "OptionName": "Under 45%",
        "value": "u45"
      },
      {
        "OptionName": "Under 40%",
        "value": "u40"
      },
      {
        "OptionName": "Under 35%",
        "value": "u35"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 0%",
        "value": "u0"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -70%",
        "value": "u-70"
      },
      {
        "OptionName": "Under -100%",
        "value": "u-100"
      },
      {
        "OptionName": "Over 0%",
        "value": "o0"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 35%",
        "value": "o35"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 45%",
        "value": "o45"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Operating Margin",
    "id": "fs_fa_opermargin",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Very Negative (&lt;-20%)",
        "value": "veryneg"
      },
      {
        "OptionName": "High (&gt;25%)",
        "value": "high"
      },
      {
        "OptionName": "Under 90%",
        "value": "u90"
      },
      {
        "OptionName": "Under 80%",
        "value": "u80"
      },
      {
        "OptionName": "Under 70%",
        "value": "u70"
      },
      {
        "OptionName": "Under 60%",
        "value": "u60"
      },
      {
        "OptionName": "Under 50%",
        "value": "u50"
      },
      {
        "OptionName": "Under 45%",
        "value": "u45"
      },
      {
        "OptionName": "Under 40%",
        "value": "u40"
      },
      {
        "OptionName": "Under 35%",
        "value": "u35"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 0%",
        "value": "u0"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -70%",
        "value": "u-70"
      },
      {
        "OptionName": "Under -100%",
        "value": "u-100"
      },
      {
        "OptionName": "Over 0%",
        "value": "o0"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 35%",
        "value": "o35"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 45%",
        "value": "o45"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Net Profit Margin",
    "id": "fs_fa_netmargin",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Very Negative (&lt;-20%)",
        "value": "veryneg"
      },
      {
        "OptionName": "High (&gt;20%)",
        "value": "high"
      },
      {
        "OptionName": "Under 90%",
        "value": "u90"
      },
      {
        "OptionName": "Under 80%",
        "value": "u80"
      },
      {
        "OptionName": "Under 70%",
        "value": "u70"
      },
      {
        "OptionName": "Under 60%",
        "value": "u60"
      },
      {
        "OptionName": "Under 50%",
        "value": "u50"
      },
      {
        "OptionName": "Under 45%",
        "value": "u45"
      },
      {
        "OptionName": "Under 40%",
        "value": "u40"
      },
      {
        "OptionName": "Under 35%",
        "value": "u35"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 0%",
        "value": "u0"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -70%",
        "value": "u-70"
      },
      {
        "OptionName": "Under -100%",
        "value": "u-100"
      },
      {
        "OptionName": "Over 0%",
        "value": "o0"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 35%",
        "value": "o35"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 45%",
        "value": "o45"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Payout Ratio",
    "id": "fs_fa_payoutratio",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "None (0%)",
        "value": "none"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Low (&lt;20%)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;50%)",
        "value": "high"
      },
      {
        "OptionName": "Over 0%",
        "value": "o0"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Over 100%",
        "value": "o100"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Under 40%",
        "value": "u40"
      },
      {
        "OptionName": "Under 50%",
        "value": "u50"
      },
      {
        "OptionName": "Under 60%",
        "value": "u60"
      },
      {
        "OptionName": "Under 70%",
        "value": "u70"
      },
      {
        "OptionName": "Under 80%",
        "value": "u80"
      },
      {
        "OptionName": "Under 90%",
        "value": "u90"
      },
      {
        "OptionName": "Under 100%",
        "value": "u100"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Insider<br>Ownership",
    "id": "fs_sh_insiderown",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;5%)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;30%)",
        "value": "high"
      },
      {
        "OptionName": "Very High (&gt;50%)",
        "value": "veryhigh"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Insider<br>Transactions",
    "id": "fs_sh_insidertrans",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Very Negative (&lt;20%)",
        "value": "veryneg"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Very Positive (&gt;20%)",
        "value": "verypos"
      },
      {
        "OptionName": "Under -90%",
        "value": "u-90"
      },
      {
        "OptionName": "Under -80%",
        "value": "u-80"
      },
      {
        "OptionName": "Under -70%",
        "value": "u-70"
      },
      {
        "OptionName": "Under -60%",
        "value": "u-60"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -45%",
        "value": "u-45"
      },
      {
        "OptionName": "Under -40%",
        "value": "u-40"
      },
      {
        "OptionName": "Under -35%",
        "value": "u-35"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -25%",
        "value": "u-25"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -15%",
        "value": "u-15"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -5%",
        "value": "u-5"
      },
      {
        "OptionName": "Over +5%",
        "value": "o5"
      },
      {
        "OptionName": "Over +10%",
        "value": "o10"
      },
      {
        "OptionName": "Over +15%",
        "value": "o15"
      },
      {
        "OptionName": "Over +20%",
        "value": "o20"
      },
      {
        "OptionName": "Over +25%",
        "value": "o25"
      },
      {
        "OptionName": "Over +30%",
        "value": "o30"
      },
      {
        "OptionName": "Over +35%",
        "value": "o35"
      },
      {
        "OptionName": "Over +40%",
        "value": "o40"
      },
      {
        "OptionName": "Over +45%",
        "value": "o45"
      },
      {
        "OptionName": "Over +50%",
        "value": "o50"
      },
      {
        "OptionName": "Over +60%",
        "value": "o60"
      },
      {
        "OptionName": "Over +70%",
        "value": "o70"
      },
      {
        "OptionName": "Over +80%",
        "value": "o80"
      },
      {
        "OptionName": "Over +90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Institutional<br>Ownership",
    "id": "fs_sh_instown",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;5%)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;90%)",
        "value": "high"
      },
      {
        "OptionName": "Under 90%",
        "value": "u90"
      },
      {
        "OptionName": "Under 80%",
        "value": "u80"
      },
      {
        "OptionName": "Under 70%",
        "value": "u70"
      },
      {
        "OptionName": "Under 60%",
        "value": "u60"
      },
      {
        "OptionName": "Under 50%",
        "value": "u50"
      },
      {
        "OptionName": "Under 40%",
        "value": "u40"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Over 40%",
        "value": "o40"
      },
      {
        "OptionName": "Over 50%",
        "value": "o50"
      },
      {
        "OptionName": "Over 60%",
        "value": "o60"
      },
      {
        "OptionName": "Over 70%",
        "value": "o70"
      },
      {
        "OptionName": "Over 80%",
        "value": "o80"
      },
      {
        "OptionName": "Over 90%",
        "value": "o90"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Institutional<br>Transactions",
    "id": "fs_sh_insttrans",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Very Negative (&lt;20%)",
        "value": "veryneg"
      },
      {
        "OptionName": "Negative (&lt;0%)",
        "value": "neg"
      },
      {
        "OptionName": "Positive (&gt;0%)",
        "value": "pos"
      },
      {
        "OptionName": "Very Positive (&gt;20%)",
        "value": "verypos"
      },
      {
        "OptionName": "Under -50%",
        "value": "u-50"
      },
      {
        "OptionName": "Under -45%",
        "value": "u-45"
      },
      {
        "OptionName": "Under -40%",
        "value": "u-40"
      },
      {
        "OptionName": "Under -35%",
        "value": "u-35"
      },
      {
        "OptionName": "Under -30%",
        "value": "u-30"
      },
      {
        "OptionName": "Under -25%",
        "value": "u-25"
      },
      {
        "OptionName": "Under -20%",
        "value": "u-20"
      },
      {
        "OptionName": "Under -15%",
        "value": "u-15"
      },
      {
        "OptionName": "Under -10%",
        "value": "u-10"
      },
      {
        "OptionName": "Under -5%",
        "value": "u-5"
      },
      {
        "OptionName": "Over +5%",
        "value": "o5"
      },
      {
        "OptionName": "Over +10%",
        "value": "o10"
      },
      {
        "OptionName": "Over +15%",
        "value": "o15"
      },
      {
        "OptionName": "Over +20%",
        "value": "o20"
      },
      {
        "OptionName": "Over +25%",
        "value": "o25"
      },
      {
        "OptionName": "Over +30%",
        "value": "o30"
      },
      {
        "OptionName": "Over +35%",
        "value": "o35"
      },
      {
        "OptionName": "Over +40%",
        "value": "o40"
      },
      {
        "OptionName": "Over +45%",
        "value": "o45"
      },
      {
        "OptionName": "Over +50%",
        "value": "o50"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Float Short",
    "id": "fs_sh_short",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Low (&lt;5%)",
        "value": "low"
      },
      {
        "OptionName": "High (&gt;20%)",
        "value": "high"
      },
      {
        "OptionName": "Under 5%",
        "value": "u5"
      },
      {
        "OptionName": "Under 10%",
        "value": "u10"
      },
      {
        "OptionName": "Under 15%",
        "value": "u15"
      },
      {
        "OptionName": "Under 20%",
        "value": "u20"
      },
      {
        "OptionName": "Under 25%",
        "value": "u25"
      },
      {
        "OptionName": "Under 30%",
        "value": "u30"
      },
      {
        "OptionName": "Over 5%",
        "value": "o5"
      },
      {
        "OptionName": "Over 10%",
        "value": "o10"
      },
      {
        "OptionName": "Over 15%",
        "value": "o15"
      },
      {
        "OptionName": "Over 20%",
        "value": "o20"
      },
      {
        "OptionName": "Over 25%",
        "value": "o25"
      },
      {
        "OptionName": "Over 30%",
        "value": "o30"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Analyst Recom.",
    "id": "fs_an_recom",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Strong Buy (1)",
        "value": "strongbuy"
      },
      {
        "OptionName": "Buy or better",
        "value": "buybetter"
      },
      {
        "OptionName": "Buy",
        "value": "buy"
      },
      {
        "OptionName": "Hold or better",
        "value": "holdbetter"
      },
      {
        "OptionName": "Hold",
        "value": "hold"
      },
      {
        "OptionName": "Hold or worse",
        "value": "holdworse"
      },
      {
        "OptionName": "Sell",
        "value": "sell"
      },
      {
        "OptionName": "Sell or worse",
        "value": "sellworse"
      },
      {
        "OptionName": "Strong Sell (5)",
        "value": "strongsell"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Option/Short",
    "id": "fs_sh_opt",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Optionable",
        "value": "option"
      },
      {
        "OptionName": "Shortable",
        "value": "short"
      },
      {
        "OptionName": "Optionable and shortable",
        "value": "optionshort"
      }
    ]
  },
  {
    "name": "Earnings Date",
    "id": "fs_earningsdate",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Today",
        "value": "today"
      },
      {
        "OptionName": "Today Before Market Open",
        "value": "todaybefore"
      },
      {
        "OptionName": "Today After Market Close",
        "value": "todayafter"
      },
      {
        "OptionName": "Tomorrow",
        "value": "tomorrow"
      },
      {
        "OptionName": "Tomorrow Before Market Open",
        "value": "tomorrowbefore"
      },
      {
        "OptionName": "Tomorrow After Market Close",
        "value": "tomorrowafter"
      },
      {
        "OptionName": "Yesterday",
        "value": "yesterday"
      },
      {
        "OptionName": "Yesterday Before Market Open",
        "value": "yesterdaybefore"
      },
      {
        "OptionName": "Yesterday After Market Close",
        "value": "yesterdayafter"
      },
      {
        "OptionName": "Next 5 Days",
        "value": "nextdays5"
      },
      {
        "OptionName": "Previous 5 Days",
        "value": "prevdays5"
      },
      {
        "OptionName": "This Week",
        "value": "thisweek"
      },
      {
        "OptionName": "Next Week",
        "value": "nextweek"
      },
      {
        "OptionName": "Previous Week",
        "value": "prevweek"
      },
      {
        "OptionName": "This Month",
        "value": "thismonth"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Performance",
    "id": "fs_ta_perf",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Today Up",
        "value": "dup"
      },
      {
        "OptionName": "Today Down",
        "value": "ddown"
      },
      {
        "OptionName": "Today -15%",
        "value": "d15u"
      },
      {
        "OptionName": "Today -10%",
        "value": "d10u"
      },
      {
        "OptionName": "Today -5%",
        "value": "d5u"
      },
      {
        "OptionName": "Today +5%",
        "value": "d5o"
      },
      {
        "OptionName": "Today +10%",
        "value": "d10o"
      },
      {
        "OptionName": "Today +15%",
        "value": "d15o"
      },
      {
        "OptionName": "Week -30%",
        "value": "1w30u"
      },
      {
        "OptionName": "Week -20%",
        "value": "1w20u"
      },
      {
        "OptionName": "Week -10%",
        "value": "1w10u"
      },
      {
        "OptionName": "Week Down",
        "value": "1wdown"
      },
      {
        "OptionName": "Week Up",
        "value": "1wup"
      },
      {
        "OptionName": "Week +10%",
        "value": "1w10o"
      },
      {
        "OptionName": "Week +20%",
        "value": "1w20o"
      },
      {
        "OptionName": "Week +30%",
        "value": "1w30o"
      },
      {
        "OptionName": "Month -50%",
        "value": "4w50u"
      },
      {
        "OptionName": "Month -30%",
        "value": "4w30u"
      },
      {
        "OptionName": "Month -20%",
        "value": "4w20u"
      },
      {
        "OptionName": "Month -10%",
        "value": "4w10u"
      },
      {
        "OptionName": "Month Down",
        "value": "4wdown"
      },
      {
        "OptionName": "Month Up",
        "value": "4wup"
      },
      {
        "OptionName": "Month +10%",
        "value": "4w10o"
      },
      {
        "OptionName": "Month +20%",
        "value": "4w20o"
      },
      {
        "OptionName": "Month +30%",
        "value": "4w30o"
      },
      {
        "OptionName": "Month +50%",
        "value": "4w50o"
      },
      {
        "OptionName": "Quarter -50%",
        "value": "13w50u"
      },
      {
        "OptionName": "Quarter -30%",
        "value": "13w30u"
      },
      {
        "OptionName": "Quarter -20%",
        "value": "13w20u"
      },
      {
        "OptionName": "Quarter -10%",
        "value": "13w10u"
      },
      {
        "OptionName": "Quarter Down",
        "value": "13wdown"
      },
      {
        "OptionName": "Quarter Up",
        "value": "13wup"
      },
      {
        "OptionName": "Quarter +10%",
        "value": "13w10o"
      },
      {
        "OptionName": "Quarter +20%",
        "value": "13w20o"
      },
      {
        "OptionName": "Quarter +30%",
        "value": "13w30o"
      },
      {
        "OptionName": "Quarter +50%",
        "value": "13w50o"
      },
      {
        "OptionName": "Half -75%",
        "value": "26w75u"
      },
      {
        "OptionName": "Half -50%",
        "value": "26w50u"
      },
      {
        "OptionName": "Half -30%",
        "value": "26w30u"
      },
      {
        "OptionName": "Half -20%",
        "value": "26w20u"
      },
      {
        "OptionName": "Half -10%",
        "value": "26w10u"
      },
      {
        "OptionName": "Half Down",
        "value": "26wdown"
      },
      {
        "OptionName": "Half Up",
        "value": "26wup"
      },
      {
        "OptionName": "Half +10%",
        "value": "26w10o"
      },
      {
        "OptionName": "Half +20%",
        "value": "26w20o"
      },
      {
        "OptionName": "Half +30%",
        "value": "26w30o"
      },
      {
        "OptionName": "Half +50%",
        "value": "26w50o"
      },
      {
        "OptionName": "Half +100%",
        "value": "26w100o"
      },
      {
        "OptionName": "Year -75%",
        "value": "52w75u"
      },
      {
        "OptionName": "Year -50%",
        "value": "52w50u"
      },
      {
        "OptionName": "Year -30%",
        "value": "52w30u"
      },
      {
        "OptionName": "Year -20%",
        "value": "52w20u"
      },
      {
        "OptionName": "Year -10%",
        "value": "52w10u"
      },
      {
        "OptionName": "Year Down",
        "value": "52wdown"
      },
      {
        "OptionName": "Year Up",
        "value": "52wup"
      },
      {
        "OptionName": "Year +10%",
        "value": "52w10o"
      },
      {
        "OptionName": "Year +20%",
        "value": "52w20o"
      },
      {
        "OptionName": "Year +30%",
        "value": "52w30o"
      },
      {
        "OptionName": "Year +50%",
        "value": "52w50o"
      },
      {
        "OptionName": "Year +100%",
        "value": "52w100o"
      },
      {
        "OptionName": "Year +200%",
        "value": "52w200o"
      },
      {
        "OptionName": "Year +300%",
        "value": "52w300o"
      },
      {
        "OptionName": "Year +500%",
        "value": "52w500o"
      },
      {
        "OptionName": "YTD -75%",
        "value": "ytd75u"
      },
      {
        "OptionName": "YTD -50%",
        "value": "ytd50u"
      },
      {
        "OptionName": "YTD -30%",
        "value": "ytd30u"
      },
      {
        "OptionName": "YTD -20%",
        "value": "ytd20u"
      },
      {
        "OptionName": "YTD -10%",
        "value": "ytd10u"
      },
      {
        "OptionName": "YTD -5%",
        "value": "ytd5u"
      },
      {
        "OptionName": "YTD Down",
        "value": "ytddown"
      },
      {
        "OptionName": "YTD Up",
        "value": "ytdup"
      },
      {
        "OptionName": "YTD +5%",
        "value": "ytd5o"
      },
      {
        "OptionName": "YTD +10%",
        "value": "ytd10o"
      },
      {
        "OptionName": "YTD +20%",
        "value": "ytd20o"
      },
      {
        "OptionName": "YTD +30%",
        "value": "ytd30o"
      },
      {
        "OptionName": "YTD +50%",
        "value": "ytd50o"
      },
      {
        "OptionName": "YTD +100%",
        "value": "ytd100o"
      }
    ]
  },
  {
    "name": "Performance 2",
    "id": "fs_ta_perf2",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Today Up",
        "value": "dup"
      },
      {
        "OptionName": "Today Down",
        "value": "ddown"
      },
      {
        "OptionName": "Today -15%",
        "value": "d15u"
      },
      {
        "OptionName": "Today -10%",
        "value": "d10u"
      },
      {
        "OptionName": "Today -5%",
        "value": "d5u"
      },
      {
        "OptionName": "Today +5%",
        "value": "d5o"
      },
      {
        "OptionName": "Today +10%",
        "value": "d10o"
      },
      {
        "OptionName": "Today +15%",
        "value": "d15o"
      },
      {
        "OptionName": "Week -30%",
        "value": "1w30u"
      },
      {
        "OptionName": "Week -20%",
        "value": "1w20u"
      },
      {
        "OptionName": "Week -10%",
        "value": "1w10u"
      },
      {
        "OptionName": "Week Down",
        "value": "1wdown"
      },
      {
        "OptionName": "Week Up",
        "value": "1wup"
      },
      {
        "OptionName": "Week +10%",
        "value": "1w10o"
      },
      {
        "OptionName": "Week +20%",
        "value": "1w20o"
      },
      {
        "OptionName": "Week +30%",
        "value": "1w30o"
      },
      {
        "OptionName": "Month -50%",
        "value": "4w50u"
      },
      {
        "OptionName": "Month -30%",
        "value": "4w30u"
      },
      {
        "OptionName": "Month -20%",
        "value": "4w20u"
      },
      {
        "OptionName": "Month -10%",
        "value": "4w10u"
      },
      {
        "OptionName": "Month Down",
        "value": "4wdown"
      },
      {
        "OptionName": "Month Up",
        "value": "4wup"
      },
      {
        "OptionName": "Month +10%",
        "value": "4w10o"
      },
      {
        "OptionName": "Month +20%",
        "value": "4w20o"
      },
      {
        "OptionName": "Month +30%",
        "value": "4w30o"
      },
      {
        "OptionName": "Month +50%",
        "value": "4w50o"
      },
      {
        "OptionName": "Quarter -50%",
        "value": "13w50u"
      },
      {
        "OptionName": "Quarter -30%",
        "value": "13w30u"
      },
      {
        "OptionName": "Quarter -20%",
        "value": "13w20u"
      },
      {
        "OptionName": "Quarter -10%",
        "value": "13w10u"
      },
      {
        "OptionName": "Quarter Down",
        "value": "13wdown"
      },
      {
        "OptionName": "Quarter Up",
        "value": "13wup"
      },
      {
        "OptionName": "Quarter +10%",
        "value": "13w10o"
      },
      {
        "OptionName": "Quarter +20%",
        "value": "13w20o"
      },
      {
        "OptionName": "Quarter +30%",
        "value": "13w30o"
      },
      {
        "OptionName": "Quarter +50%",
        "value": "13w50o"
      },
      {
        "OptionName": "Half -75%",
        "value": "26w75u"
      },
      {
        "OptionName": "Half -50%",
        "value": "26w50u"
      },
      {
        "OptionName": "Half -30%",
        "value": "26w30u"
      },
      {
        "OptionName": "Half -20%",
        "value": "26w20u"
      },
      {
        "OptionName": "Half -10%",
        "value": "26w10u"
      },
      {
        "OptionName": "Half Down",
        "value": "26wdown"
      },
      {
        "OptionName": "Half Up",
        "value": "26wup"
      },
      {
        "OptionName": "Half +10%",
        "value": "26w10o"
      },
      {
        "OptionName": "Half +20%",
        "value": "26w20o"
      },
      {
        "OptionName": "Half +30%",
        "value": "26w30o"
      },
      {
        "OptionName": "Half +50%",
        "value": "26w50o"
      },
      {
        "OptionName": "Half +100%",
        "value": "26w100o"
      },
      {
        "OptionName": "Year -75%",
        "value": "52w75u"
      },
      {
        "OptionName": "Year -50%",
        "value": "52w50u"
      },
      {
        "OptionName": "Year -30%",
        "value": "52w30u"
      },
      {
        "OptionName": "Year -20%",
        "value": "52w20u"
      },
      {
        "OptionName": "Year -10%",
        "value": "52w10u"
      },
      {
        "OptionName": "Year Down",
        "value": "52wdown"
      },
      {
        "OptionName": "Year Up",
        "value": "52wup"
      },
      {
        "OptionName": "Year +10%",
        "value": "52w10o"
      },
      {
        "OptionName": "Year +20%",
        "value": "52w20o"
      },
      {
        "OptionName": "Year +30%",
        "value": "52w30o"
      },
      {
        "OptionName": "Year +50%",
        "value": "52w50o"
      },
      {
        "OptionName": "Year +100%",
        "value": "52w100o"
      },
      {
        "OptionName": "Year +200%",
        "value": "52w200o"
      },
      {
        "OptionName": "Year +300%",
        "value": "52w300o"
      },
      {
        "OptionName": "Year +500%",
        "value": "52w500o"
      },
      {
        "OptionName": "YTD -75%",
        "value": "ytd75u"
      },
      {
        "OptionName": "YTD -50%",
        "value": "ytd50u"
      },
      {
        "OptionName": "YTD -30%",
        "value": "ytd30u"
      },
      {
        "OptionName": "YTD -20%",
        "value": "ytd20u"
      },
      {
        "OptionName": "YTD -10%",
        "value": "ytd10u"
      },
      {
        "OptionName": "YTD -5%",
        "value": "ytd5u"
      },
      {
        "OptionName": "YTD Down",
        "value": "ytddown"
      },
      {
        "OptionName": "YTD Up",
        "value": "ytdup"
      },
      {
        "OptionName": "YTD +5%",
        "value": "ytd5o"
      },
      {
        "OptionName": "YTD +10%",
        "value": "ytd10o"
      },
      {
        "OptionName": "YTD +20%",
        "value": "ytd20o"
      },
      {
        "OptionName": "YTD +30%",
        "value": "ytd30o"
      },
      {
        "OptionName": "YTD +50%",
        "value": "ytd50o"
      },
      {
        "OptionName": "YTD +100%",
        "value": "ytd100o"
      }
    ]
  },
  {
    "name": "Volatility",
    "id": "fs_ta_volatility",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Week - Over 3%",
        "value": "wo3"
      },
      {
        "OptionName": "Week - Over 4%",
        "value": "wo4"
      },
      {
        "OptionName": "Week - Over 5%",
        "value": "wo5"
      },
      {
        "OptionName": "Week - Over 6%",
        "value": "wo6"
      },
      {
        "OptionName": "Week - Over 7%",
        "value": "wo7"
      },
      {
        "OptionName": "Week - Over 8%",
        "value": "wo8"
      },
      {
        "OptionName": "Week - Over 9%",
        "value": "wo9"
      },
      {
        "OptionName": "Week - Over 10%",
        "value": "wo10"
      },
      {
        "OptionName": "Week - Over 12%",
        "value": "wo12"
      },
      {
        "OptionName": "Week - Over 15%",
        "value": "wo15"
      },
      {
        "OptionName": "Month - Over 2%",
        "value": "mo2"
      },
      {
        "OptionName": "Month - Over 3%",
        "value": "mo3"
      },
      {
        "OptionName": "Month - Over 4%",
        "value": "mo4"
      },
      {
        "OptionName": "Month - Over 5%",
        "value": "mo5"
      },
      {
        "OptionName": "Month - Over 6%",
        "value": "mo6"
      },
      {
        "OptionName": "Month - Over 7%",
        "value": "mo7"
      },
      {
        "OptionName": "Month - Over 8%",
        "value": "mo8"
      },
      {
        "OptionName": "Month - Over 9%",
        "value": "mo9"
      },
      {
        "OptionName": "Month - Over 10%",
        "value": "mo10"
      },
      {
        "OptionName": "Month - Over 12%",
        "value": "mo12"
      },
      {
        "OptionName": "Month - Over 15%",
        "value": "mo15"
      }
    ]
  },
  {
    "name": "RSI (14)",
    "id": "fs_ta_rsi",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Overbought (90)",
        "value": "ob90"
      },
      {
        "OptionName": "Overbought (80)",
        "value": "ob80"
      },
      {
        "OptionName": "Overbought (70)",
        "value": "ob70"
      },
      {
        "OptionName": "Overbought (60)",
        "value": "ob60"
      },
      {
        "OptionName": "Oversold (40)",
        "value": "os40"
      },
      {
        "OptionName": "Oversold (30)",
        "value": "os30"
      },
      {
        "OptionName": "Oversold (20)",
        "value": "os20"
      },
      {
        "OptionName": "Oversold (10)",
        "value": "os10"
      },
      {
        "OptionName": "Not Overbought (&lt;60)",
        "value": "nob60"
      },
      {
        "OptionName": "Not Overbought (&lt;50)",
        "value": "nob50"
      },
      {
        "OptionName": "Not Oversold (&gt;50)",
        "value": "nos50"
      },
      {
        "OptionName": "Not Oversold (&gt;40)",
        "value": "nos40"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Gap",
    "id": "fs_ta_gap",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Up",
        "value": "u"
      },
      {
        "OptionName": "Up 0%",
        "value": "u0"
      },
      {
        "OptionName": "Up 1%",
        "value": "u1"
      },
      {
        "OptionName": "Up 2%",
        "value": "u2"
      },
      {
        "OptionName": "Up 3%",
        "value": "u3"
      },
      {
        "OptionName": "Up 4%",
        "value": "u4"
      },
      {
        "OptionName": "Up 5%",
        "value": "u5"
      },
      {
        "OptionName": "Up 6%",
        "value": "u6"
      },
      {
        "OptionName": "Up 7%",
        "value": "u7"
      },
      {
        "OptionName": "Up 8%",
        "value": "u8"
      },
      {
        "OptionName": "Up 9%",
        "value": "u9"
      },
      {
        "OptionName": "Up 10%",
        "value": "u10"
      },
      {
        "OptionName": "Up 15%",
        "value": "u15"
      },
      {
        "OptionName": "Up 20%",
        "value": "u20"
      },
      {
        "OptionName": "Down",
        "value": "d"
      },
      {
        "OptionName": "Down 0%",
        "value": "d0"
      },
      {
        "OptionName": "Down 1%",
        "value": "d1"
      },
      {
        "OptionName": "Down 2%",
        "value": "d2"
      },
      {
        "OptionName": "Down 3%",
        "value": "d3"
      },
      {
        "OptionName": "Down 4%",
        "value": "d4"
      },
      {
        "OptionName": "Down 5%",
        "value": "d5"
      },
      {
        "OptionName": "Down 6%",
        "value": "d6"
      },
      {
        "OptionName": "Down 7%",
        "value": "d7"
      },
      {
        "OptionName": "Down 8%",
        "value": "d8"
      },
      {
        "OptionName": "Down 9%",
        "value": "d9"
      },
      {
        "OptionName": "Down 10%",
        "value": "d10"
      },
      {
        "OptionName": "Down 15%",
        "value": "d15"
      },
      {
        "OptionName": "Down 20%",
        "value": "d20"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "20-Day Simple Moving Average",
    "id": "fs_ta_sma20",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Price below SMA20",
        "value": "pb"
      },
      {
        "OptionName": "Price 10% below SMA20",
        "value": "pb10"
      },
      {
        "OptionName": "Price 20% below SMA20",
        "value": "pb20"
      },
      {
        "OptionName": "Price 30% below SMA20",
        "value": "pb30"
      },
      {
        "OptionName": "Price 40% below SMA20",
        "value": "pb40"
      },
      {
        "OptionName": "Price 50% below SMA20",
        "value": "pb50"
      },
      {
        "OptionName": "Price above SMA20",
        "value": "pa"
      },
      {
        "OptionName": "Price 10% above SMA20",
        "value": "pa10"
      },
      {
        "OptionName": "Price 20% above SMA20",
        "value": "pa20"
      },
      {
        "OptionName": "Price 30% above SMA20",
        "value": "pa30"
      },
      {
        "OptionName": "Price 40% above SMA20",
        "value": "pa40"
      },
      {
        "OptionName": "Price 50% above SMA20",
        "value": "pa50"
      },
      {
        "OptionName": "Price crossed SMA20",
        "value": "pc"
      },
      {
        "OptionName": "Price crossed SMA20 above",
        "value": "pca"
      },
      {
        "OptionName": "Price crossed SMA20 below",
        "value": "pcb"
      },
      {
        "OptionName": "SMA20 crossed SMA50",
        "value": "cross50"
      },
      {
        "OptionName": "SMA20 crossed SMA50 above",
        "value": "cross50a"
      },
      {
        "OptionName": "SMA20 crossed SMA50 below",
        "value": "cross50b"
      },
      {
        "OptionName": "SMA20 crossed SMA200",
        "value": "cross200"
      },
      {
        "OptionName": "SMA20 crossed SMA200 above",
        "value": "cross200a"
      },
      {
        "OptionName": "SMA20 crossed SMA200 below",
        "value": "cross200b"
      },
      {
        "OptionName": "SMA20 above SMA50",
        "value": "sa50"
      },
      {
        "OptionName": "SMA20 below SMA50",
        "value": "sb50"
      },
      {
        "OptionName": "SMA20 above SMA200",
        "value": "sa200"
      },
      {
        "OptionName": "SMA20 below SMA200",
        "value": "sb200"
      }
    ]
  },
  {
    "name": "50-Day Simple Moving Average",
    "id": "fs_ta_sma50",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Price below SMA50",
        "value": "pb"
      },
      {
        "OptionName": "Price 10% below SMA50",
        "value": "pb10"
      },
      {
        "OptionName": "Price 20% below SMA50",
        "value": "pb20"
      },
      {
        "OptionName": "Price 30% below SMA50",
        "value": "pb30"
      },
      {
        "OptionName": "Price 40% below SMA50",
        "value": "pb40"
      },
      {
        "OptionName": "Price 50% below SMA50",
        "value": "pb50"
      },
      {
        "OptionName": "Price above SMA50",
        "value": "pa"
      },
      {
        "OptionName": "Price 10% above SMA50",
        "value": "pa10"
      },
      {
        "OptionName": "Price 20% above SMA50",
        "value": "pa20"
      },
      {
        "OptionName": "Price 30% above SMA50",
        "value": "pa30"
      },
      {
        "OptionName": "Price 40% above SMA50",
        "value": "pa40"
      },
      {
        "OptionName": "Price 50% above SMA50",
        "value": "pa50"
      },
      {
        "OptionName": "Price crossed SMA50",
        "value": "pc"
      },
      {
        "OptionName": "Price crossed SMA50 above",
        "value": "pca"
      },
      {
        "OptionName": "Price crossed SMA50 below",
        "value": "pcb"
      },
      {
        "OptionName": "SMA50 crossed SMA20",
        "value": "cross20"
      },
      {
        "OptionName": "SMA50 crossed SMA20 above",
        "value": "cross20a"
      },
      {
        "OptionName": "SMA50 crossed SMA20 below",
        "value": "cross20b"
      },
      {
        "OptionName": "SMA50 crossed SMA200",
        "value": "cross200"
      },
      {
        "OptionName": "SMA50 crossed SMA200 above",
        "value": "cross200a"
      },
      {
        "OptionName": "SMA50 crossed SMA200 below",
        "value": "cross200b"
      },
      {
        "OptionName": "SMA50 above SMA20",
        "value": "sa20"
      },
      {
        "OptionName": "SMA50 below SMA20",
        "value": "sb20"
      },
      {
        "OptionName": "SMA50 above SMA200",
        "value": "sa200"
      },
      {
        "OptionName": "SMA50 below SMA200",
        "value": "sb200"
      }
    ]
  },
  {
    "name": "200-Day Simple Moving Average",
    "id": "fs_ta_sma200",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Price below SMA200",
        "value": "pb"
      },
      {
        "OptionName": "Price 10% below SMA200",
        "value": "pb10"
      },
      {
        "OptionName": "Price 20% below SMA200",
        "value": "pb20"
      },
      {
        "OptionName": "Price 30% below SMA200",
        "value": "pb30"
      },
      {
        "OptionName": "Price 40% below SMA200",
        "value": "pb40"
      },
      {
        "OptionName": "Price 50% below SMA200",
        "value": "pb50"
      },
      {
        "OptionName": "Price 60% below SMA200",
        "value": "pb60"
      },
      {
        "OptionName": "Price 70% below SMA200",
        "value": "pb70"
      },
      {
        "OptionName": "Price 80% below SMA200",
        "value": "pb80"
      },
      {
        "OptionName": "Price 90% below SMA200",
        "value": "pb90"
      },
      {
        "OptionName": "Price above SMA200",
        "value": "pa"
      },
      {
        "OptionName": "Price 10% above SMA200",
        "value": "pa10"
      },
      {
        "OptionName": "Price 20% above SMA200",
        "value": "pa20"
      },
      {
        "OptionName": "Price 30% above SMA200",
        "value": "pa30"
      },
      {
        "OptionName": "Price 40% above SMA200",
        "value": "pa40"
      },
      {
        "OptionName": "Price 50% above SMA200",
        "value": "pa50"
      },
      {
        "OptionName": "Price 60% above SMA200",
        "value": "pa60"
      },
      {
        "OptionName": "Price 70% above SMA200",
        "value": "pa70"
      },
      {
        "OptionName": "Price 80% above SMA200",
        "value": "pa80"
      },
      {
        "OptionName": "Price 90% above SMA200",
        "value": "pa90"
      },
      {
        "OptionName": "Price 100% above SMA200",
        "value": "pa100"
      },
      {
        "OptionName": "Price crossed SMA200",
        "value": "pc"
      },
      {
        "OptionName": "Price crossed SMA200 above",
        "value": "pca"
      },
      {
        "OptionName": "Price crossed SMA200 below",
        "value": "pcb"
      },
      {
        "OptionName": "SMA200 crossed SMA20",
        "value": "cross20"
      },
      {
        "OptionName": "SMA200 crossed SMA20 above",
        "value": "cross20a"
      },
      {
        "OptionName": "SMA200 crossed SMA20 below",
        "value": "cross20b"
      },
      {
        "OptionName": "SMA200 crossed SMA50",
        "value": "cross50"
      },
      {
        "OptionName": "SMA200 crossed SMA50 above",
        "value": "cross50a"
      },
      {
        "OptionName": "SMA200 crossed SMA50 below",
        "value": "cross50b"
      },
      {
        "OptionName": "SMA200 above SMA20",
        "value": "sa20"
      },
      {
        "OptionName": "SMA200 below SMA20",
        "value": "sb20"
      },
      {
        "OptionName": "SMA200 above SMA50",
        "value": "sa50"
      },
      {
        "OptionName": "SMA200 below SMA50",
        "value": "sb50"
      }
    ]
  },
  {
    "name": "Change",
    "id": "fs_ta_change",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Up",
        "value": "u"
      },
      {
        "OptionName": "Up 1%",
        "value": "u1"
      },
      {
        "OptionName": "Up 2%",
        "value": "u2"
      },
      {
        "OptionName": "Up 3%",
        "value": "u3"
      },
      {
        "OptionName": "Up 4%",
        "value": "u4"
      },
      {
        "OptionName": "Up 5%",
        "value": "u5"
      },
      {
        "OptionName": "Up 6%",
        "value": "u6"
      },
      {
        "OptionName": "Up 7%",
        "value": "u7"
      },
      {
        "OptionName": "Up 8%",
        "value": "u8"
      },
      {
        "OptionName": "Up 9%",
        "value": "u9"
      },
      {
        "OptionName": "Up 10%",
        "value": "u10"
      },
      {
        "OptionName": "Up 15%",
        "value": "u15"
      },
      {
        "OptionName": "Up 20%",
        "value": "u20"
      },
      {
        "OptionName": "Down",
        "value": "d"
      },
      {
        "OptionName": "Down 1%",
        "value": "d1"
      },
      {
        "OptionName": "Down 2%",
        "value": "d2"
      },
      {
        "OptionName": "Down 3%",
        "value": "d3"
      },
      {
        "OptionName": "Down 4%",
        "value": "d4"
      },
      {
        "OptionName": "Down 5%",
        "value": "d5"
      },
      {
        "OptionName": "Down 6%",
        "value": "d6"
      },
      {
        "OptionName": "Down 7%",
        "value": "d7"
      },
      {
        "OptionName": "Down 8%",
        "value": "d8"
      },
      {
        "OptionName": "Down 9%",
        "value": "d9"
      },
      {
        "OptionName": "Down 10%",
        "value": "d10"
      },
      {
        "OptionName": "Down 15%",
        "value": "d15"
      },
      {
        "OptionName": "Down 20%",
        "value": "d20"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Change from Open",
    "id": "fs_ta_changeopen",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Up",
        "value": "u"
      },
      {
        "OptionName": "Up 1%",
        "value": "u1"
      },
      {
        "OptionName": "Up 2%",
        "value": "u2"
      },
      {
        "OptionName": "Up 3%",
        "value": "u3"
      },
      {
        "OptionName": "Up 4%",
        "value": "u4"
      },
      {
        "OptionName": "Up 5%",
        "value": "u5"
      },
      {
        "OptionName": "Up 6%",
        "value": "u6"
      },
      {
        "OptionName": "Up 7%",
        "value": "u7"
      },
      {
        "OptionName": "Up 8%",
        "value": "u8"
      },
      {
        "OptionName": "Up 9%",
        "value": "u9"
      },
      {
        "OptionName": "Up 10%",
        "value": "u10"
      },
      {
        "OptionName": "Up 15%",
        "value": "u15"
      },
      {
        "OptionName": "Up 20%",
        "value": "u20"
      },
      {
        "OptionName": "Down",
        "value": "d"
      },
      {
        "OptionName": "Down 1%",
        "value": "d1"
      },
      {
        "OptionName": "Down 2%",
        "value": "d2"
      },
      {
        "OptionName": "Down 3%",
        "value": "d3"
      },
      {
        "OptionName": "Down 4%",
        "value": "d4"
      },
      {
        "OptionName": "Down 5%",
        "value": "d5"
      },
      {
        "OptionName": "Down 6%",
        "value": "d6"
      },
      {
        "OptionName": "Down 7%",
        "value": "d7"
      },
      {
        "OptionName": "Down 8%",
        "value": "d8"
      },
      {
        "OptionName": "Down 9%",
        "value": "d9"
      },
      {
        "OptionName": "Down 10%",
        "value": "d10"
      },
      {
        "OptionName": "Down 15%",
        "value": "d15"
      },
      {
        "OptionName": "Down 20%",
        "value": "d20"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "20-Day High/Low",
    "id": "fs_ta_highlow20d",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "New High",
        "value": "nh"
      },
      {
        "OptionName": "New Low",
        "value": "nl"
      },
      {
        "OptionName": "5% or more below High",
        "value": "b5h"
      },
      {
        "OptionName": "10% or more below High",
        "value": "b10h"
      },
      {
        "OptionName": "15% or more below High",
        "value": "b15h"
      },
      {
        "OptionName": "20% or more below High",
        "value": "b20h"
      },
      {
        "OptionName": "30% or more below High",
        "value": "b30h"
      },
      {
        "OptionName": "40% or more below High",
        "value": "b40h"
      },
      {
        "OptionName": "50% or more below High",
        "value": "b50h"
      },
      {
        "OptionName": "0-3% below High",
        "value": "b0to3h"
      },
      {
        "OptionName": "0-5% below High",
        "value": "b0to5h"
      },
      {
        "OptionName": "0-10% below High",
        "value": "b0to10h"
      },
      {
        "OptionName": "5% or more above Low",
        "value": "a5h"
      },
      {
        "OptionName": "10% or more above Low",
        "value": "a10h"
      },
      {
        "OptionName": "15% or more above Low",
        "value": "a15h"
      },
      {
        "OptionName": "20% or more above Low",
        "value": "a20h"
      },
      {
        "OptionName": "30% or more above Low",
        "value": "a30h"
      },
      {
        "OptionName": "40% or more above Low",
        "value": "a40h"
      },
      {
        "OptionName": "50% or more above Low",
        "value": "a50h"
      },
      {
        "OptionName": "0-3% above Low",
        "value": "a0to3h"
      },
      {
        "OptionName": "0-5% above Low",
        "value": "a0to5h"
      },
      {
        "OptionName": "0-10% above Low",
        "value": "a0to10h"
      }
    ]
  },
  {
    "name": "50-Day High/Low",
    "id": "fs_ta_highlow50d",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "New High",
        "value": "nh"
      },
      {
        "OptionName": "New Low",
        "value": "nl"
      },
      {
        "OptionName": "5% or more below High",
        "value": "b5h"
      },
      {
        "OptionName": "10% or more below High",
        "value": "b10h"
      },
      {
        "OptionName": "15% or more below High",
        "value": "b15h"
      },
      {
        "OptionName": "20% or more below High",
        "value": "b20h"
      },
      {
        "OptionName": "30% or more below High",
        "value": "b30h"
      },
      {
        "OptionName": "40% or more below High",
        "value": "b40h"
      },
      {
        "OptionName": "50% or more below High",
        "value": "b50h"
      },
      {
        "OptionName": "0-3% below High",
        "value": "b0to3h"
      },
      {
        "OptionName": "0-5% below High",
        "value": "b0to5h"
      },
      {
        "OptionName": "0-10% below High",
        "value": "b0to10h"
      },
      {
        "OptionName": "5% or more above Low",
        "value": "a5h"
      },
      {
        "OptionName": "10% or more above Low",
        "value": "a10h"
      },
      {
        "OptionName": "15% or more above Low",
        "value": "a15h"
      },
      {
        "OptionName": "20% or more above Low",
        "value": "a20h"
      },
      {
        "OptionName": "30% or more above Low",
        "value": "a30h"
      },
      {
        "OptionName": "40% or more above Low",
        "value": "a40h"
      },
      {
        "OptionName": "50% or more above Low",
        "value": "a50h"
      },
      {
        "OptionName": "0-3% above Low",
        "value": "a0to3h"
      },
      {
        "OptionName": "0-5% above Low",
        "value": "a0to5h"
      },
      {
        "OptionName": "0-10% above Low",
        "value": "a0to10h"
      }
    ]
  },
  {
    "name": "52-Week High/Low",
    "id": "fs_ta_highlow52w",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "New High",
        "value": "nh"
      },
      {
        "OptionName": "New Low",
        "value": "nl"
      },
      {
        "OptionName": "5% or more below High",
        "value": "b5h"
      },
      {
        "OptionName": "10% or more below High",
        "value": "b10h"
      },
      {
        "OptionName": "15% or more below High",
        "value": "b15h"
      },
      {
        "OptionName": "20% or more below High",
        "value": "b20h"
      },
      {
        "OptionName": "30% or more below High",
        "value": "b30h"
      },
      {
        "OptionName": "40% or more below High",
        "value": "b40h"
      },
      {
        "OptionName": "50% or more below High",
        "value": "b50h"
      },
      {
        "OptionName": "60% or more below High",
        "value": "b60h"
      },
      {
        "OptionName": "70% or more below High",
        "value": "b70h"
      },
      {
        "OptionName": "80% or more below High",
        "value": "b80h"
      },
      {
        "OptionName": "90% or more below High",
        "value": "b90h"
      },
      {
        "OptionName": "0-3% below High",
        "value": "b0to3h"
      },
      {
        "OptionName": "0-5% below High",
        "value": "b0to5h"
      },
      {
        "OptionName": "0-10% below High",
        "value": "b0to10h"
      },
      {
        "OptionName": "5% or more above Low",
        "value": "a5h"
      },
      {
        "OptionName": "10% or more above Low",
        "value": "a10h"
      },
      {
        "OptionName": "15% or more above Low",
        "value": "a15h"
      },
      {
        "OptionName": "20% or more above Low",
        "value": "a20h"
      },
      {
        "OptionName": "30% or more above Low",
        "value": "a30h"
      },
      {
        "OptionName": "40% or more above Low",
        "value": "a40h"
      },
      {
        "OptionName": "50% or more above Low",
        "value": "a50h"
      },
      {
        "OptionName": "60% or more above Low",
        "value": "a60h"
      },
      {
        "OptionName": "70% or more above Low",
        "value": "a70h"
      },
      {
        "OptionName": "80% or more above Low",
        "value": "a80h"
      },
      {
        "OptionName": "90% or more above Low",
        "value": "a90h"
      },
      {
        "OptionName": "100% or more above Low",
        "value": "a100h"
      },
      {
        "OptionName": "120% or more above Low",
        "value": "a120h"
      },
      {
        "OptionName": "150% or more above Low",
        "value": "a150h"
      },
      {
        "OptionName": "200% or more above Low",
        "value": "a200h"
      },
      {
        "OptionName": "300% or more above Low",
        "value": "a300h"
      },
      {
        "OptionName": "500% or more above Low",
        "value": "a500h"
      },
      {
        "OptionName": "0-3% above Low",
        "value": "a0to3h"
      },
      {
        "OptionName": "0-5% above Low",
        "value": "a0to5h"
      },
      {
        "OptionName": "0-10% above Low",
        "value": "a0to10h"
      }
    ]
  },
  {
    "name": "Pattern",
    "id": "fs_ta_pattern",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Horizontal S/R",
        "value": "horizontal"
      },
      {
        "OptionName": "Horizontal S/R (Strong)",
        "value": "horizontal2"
      },
      {
        "OptionName": "TL Resistance",
        "value": "tlresistance"
      },
      {
        "OptionName": "TL Resistance (Strong)",
        "value": "tlresistance2"
      },
      {
        "OptionName": "TL Support",
        "value": "tlsupport"
      },
      {
        "OptionName": "TL Support (Strong)",
        "value": "tlsupport2"
      },
      {
        "OptionName": "Wedge Up",
        "value": "wedgeup"
      },
      {
        "OptionName": "Wedge Up (Strong)",
        "value": "wedgeup2"
      },
      {
        "OptionName": "Wedge Down",
        "value": "wedgedown"
      },
      {
        "OptionName": "Wedge Down (Strong)",
        "value": "wedgedown2"
      },
      {
        "OptionName": "Triangle Ascending",
        "value": "wedgeresistance"
      },
      {
        "OptionName": "Triangle Ascending (Strong)",
        "value": "wedgeresistance2"
      },
      {
        "OptionName": "Triangle Descending",
        "value": "wedgesupport"
      },
      {
        "OptionName": "Triangle Descending (Strong)",
        "value": "wedgesupport2"
      },
      {
        "OptionName": "Wedge",
        "value": "wedge"
      },
      {
        "OptionName": "Wedge (Strong)",
        "value": "wedge2"
      },
      {
        "OptionName": "Channel Up",
        "value": "channelup"
      },
      {
        "OptionName": "Channel Up (Strong)",
        "value": "channelup2"
      },
      {
        "OptionName": "Channel Down",
        "value": "channeldown"
      },
      {
        "OptionName": "Channel Down (Strong)",
        "value": "channeldown2"
      },
      {
        "OptionName": "Channel",
        "value": "channel"
      },
      {
        "OptionName": "Channel (Strong)",
        "value": "channel2"
      },
      {
        "OptionName": "Double Top",
        "value": "doubletop"
      },
      {
        "OptionName": "Double Bottom",
        "value": "doublebottom"
      },
      {
        "OptionName": "Multiple Top",
        "value": "multipletop"
      },
      {
        "OptionName": "Multiple Bottom",
        "value": "multiplebottom"
      },
      {
        "OptionName": "Head &amp; Shoulders",
        "value": "headandshoulders"
      },
      {
        "OptionName": "Head &amp; Shoulders Inverse",
        "value": "headandshouldersinv"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Candlestick",
    "id": "fs_ta_candlestick",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Long Lower Shadow",
        "value": "lls"
      },
      {
        "OptionName": "Long Upper Shadow",
        "value": "lus"
      },
      {
        "OptionName": "Hammer",
        "value": "h"
      },
      {
        "OptionName": "Inverted Hammer",
        "value": "ih"
      },
      {
        "OptionName": "Spinning Top White",
        "value": "stw"
      },
      {
        "OptionName": "Spinning Top Black",
        "value": "stb"
      },
      {
        "OptionName": "Doji",
        "value": "d"
      },
      {
        "OptionName": "Dragonfly Doji",
        "value": "dd"
      },
      {
        "OptionName": "Gravestone Doji",
        "value": "gd"
      },
      {
        "OptionName": "Marubozu White",
        "value": "mw"
      },
      {
        "OptionName": "Marubozu Black",
        "value": "mb"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Beta",
    "id": "fs_ta_beta",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under 0",
        "value": "u0"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 1.5",
        "value": "u1.5"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Over 0",
        "value": "o0"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 1.5",
        "value": "o1.5"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 2.5",
        "value": "o2.5"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "0 to 0.5",
        "value": "0to0.5"
      },
      {
        "OptionName": "0 to 1",
        "value": "0to1"
      },
      {
        "OptionName": "0.5 to 1",
        "value": "0.5to1"
      },
      {
        "OptionName": "0.5 to 1.5",
        "value": "0.5to1.5"
      },
      {
        "OptionName": "1 to 1.5",
        "value": "1to1.5"
      },
      {
        "OptionName": "1 to 2",
        "value": "1to2"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Average True Range",
    "id": "fs_ta_averagetruerange",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Over 0.25",
        "value": "o0.25"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 0.75",
        "value": "o0.75"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 1.5",
        "value": "o1.5"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 2.5",
        "value": "o2.5"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 3.5",
        "value": "o3.5"
      },
      {
        "OptionName": "Over 4",
        "value": "o4"
      },
      {
        "OptionName": "Over 4.5",
        "value": "o4.5"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Under 0.25",
        "value": "u0.25"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Under 0.75",
        "value": "u0.75"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 1.5",
        "value": "u1.5"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 2.5",
        "value": "u2.5"
      },
      {
        "OptionName": "Under 3",
        "value": "u3"
      },
      {
        "OptionName": "Under 3.5",
        "value": "u3.5"
      },
      {
        "OptionName": "Under 4",
        "value": "u4"
      },
      {
        "OptionName": "Under 4.5",
        "value": "u4.5"
      },
      {
        "OptionName": "Under 5",
        "value": "u5"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Average Volume",
    "id": "fs_sh_avgvol",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under 50K",
        "value": "u50"
      },
      {
        "OptionName": "Under 100K",
        "value": "u100"
      },
      {
        "OptionName": "Under 500K",
        "value": "u500"
      },
      {
        "OptionName": "Under 750K",
        "value": "u750"
      },
      {
        "OptionName": "Under 1M",
        "value": "u1000"
      },
      {
        "OptionName": "Over 50K",
        "value": "o50"
      },
      {
        "OptionName": "Over 100K",
        "value": "o100"
      },
      {
        "OptionName": "Over 200K",
        "value": "o200"
      },
      {
        "OptionName": "Over 300K",
        "value": "o300"
      },
      {
        "OptionName": "Over 400K",
        "value": "o400"
      },
      {
        "OptionName": "Over 500K",
        "value": "o500"
      },
      {
        "OptionName": "Over 750K",
        "value": "o750"
      },
      {
        "OptionName": "Over 1M",
        "value": "o1000"
      },
      {
        "OptionName": "Over 2M",
        "value": "o2000"
      },
      {
        "OptionName": "100K to 500K",
        "value": "100to500"
      },
      {
        "OptionName": "100K to 1M",
        "value": "100to1000"
      },
      {
        "OptionName": "500K to 1M",
        "value": "500to1000"
      },
      {
        "OptionName": "500K to 10M",
        "value": "500to10000"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Relative Volume",
    "id": "fs_sh_relvol",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Over 10",
        "value": "o10"
      },
      {
        "OptionName": "Over 5",
        "value": "o5"
      },
      {
        "OptionName": "Over 3",
        "value": "o3"
      },
      {
        "OptionName": "Over 2",
        "value": "o2"
      },
      {
        "OptionName": "Over 1.5",
        "value": "o1.5"
      },
      {
        "OptionName": "Over 1",
        "value": "o1"
      },
      {
        "OptionName": "Over 0.75",
        "value": "o0.75"
      },
      {
        "OptionName": "Over 0.5",
        "value": "o0.5"
      },
      {
        "OptionName": "Over 0.25",
        "value": "o0.25"
      },
      {
        "OptionName": "Under 2",
        "value": "u2"
      },
      {
        "OptionName": "Under 1.5",
        "value": "u1.5"
      },
      {
        "OptionName": "Under 1",
        "value": "u1"
      },
      {
        "OptionName": "Under 0.75",
        "value": "u0.75"
      },
      {
        "OptionName": "Under 0.5",
        "value": "u0.5"
      },
      {
        "OptionName": "Under 0.25",
        "value": "u0.25"
      },
      {
        "OptionName": "Under 0.1",
        "value": "u0.1"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  },
  {
    "name": "Current Volume",
    "id": "fs_sh_curvol",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under 50K",
        "value": "u50"
      },
      {
        "OptionName": "Under 100K",
        "value": "u100"
      },
      {
        "OptionName": "Under 500K",
        "value": "u500"
      },
      {
        "OptionName": "Under 750K",
        "value": "u750"
      },
      {
        "OptionName": "Under 1M",
        "value": "u1000"
      },
      {
        "OptionName": "Over 0",
        "value": "o0"
      },
      {
        "OptionName": "Over 50K",
        "value": "o50"
      },
      {
        "OptionName": "Over 100K",
        "value": "o100"
      },
      {
        "OptionName": "Over 200K",
        "value": "o200"
      },
      {
        "OptionName": "Over 300K",
        "value": "o300"
      },
      {
        "OptionName": "Over 400K",
        "value": "o400"
      },
      {
        "OptionName": "Over 500K",
        "value": "o500"
      },
      {
        "OptionName": "Over 750K",
        "value": "o750"
      },
      {
        "OptionName": "Over 1M",
        "value": "o1000"
      },
      {
        "OptionName": "Over 2M",
        "value": "o2000"
      },
      {
        "OptionName": "Over 5M",
        "value": "o5000"
      },
      {
        "OptionName": "Over 10M",
        "value": "o10000"
      },
      {
        "OptionName": "Over 20M",
        "value": "o20000"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Price",
    "id": "fs_sh_price",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under $1",
        "value": "u1"
      },
      {
        "OptionName": "Under $2",
        "value": "u2"
      },
      {
        "OptionName": "Under $3",
        "value": "u3"
      },
      {
        "OptionName": "Under $4",
        "value": "u4"
      },
      {
        "OptionName": "Under $5",
        "value": "u5"
      },
      {
        "OptionName": "Under $7",
        "value": "u7"
      },
      {
        "OptionName": "Under $10",
        "value": "u10"
      },
      {
        "OptionName": "Under $15",
        "value": "u15"
      },
      {
        "OptionName": "Under $20",
        "value": "u20"
      },
      {
        "OptionName": "Under $30",
        "value": "u30"
      },
      {
        "OptionName": "Under $40",
        "value": "u40"
      },
      {
        "OptionName": "Under $50",
        "value": "u50"
      },
      {
        "OptionName": "Over $1",
        "value": "o1"
      },
      {
        "OptionName": "Over $2",
        "value": "o2"
      },
      {
        "OptionName": "Over $3",
        "value": "o3"
      },
      {
        "OptionName": "Over $4",
        "value": "o4"
      },
      {
        "OptionName": "Over $5",
        "value": "o5"
      },
      {
        "OptionName": "Over $7",
        "value": "o7"
      },
      {
        "OptionName": "Over $10",
        "value": "o10"
      },
      {
        "OptionName": "Over $15",
        "value": "o15"
      },
      {
        "OptionName": "Over $20",
        "value": "o20"
      },
      {
        "OptionName": "Over $30",
        "value": "o30"
      },
      {
        "OptionName": "Over $40",
        "value": "o40"
      },
      {
        "OptionName": "Over $50",
        "value": "o50"
      },
      {
        "OptionName": "Over $60",
        "value": "o60"
      },
      {
        "OptionName": "Over $70",
        "value": "o70"
      },
      {
        "OptionName": "Over $80",
        "value": "o80"
      },
      {
        "OptionName": "Over $90",
        "value": "o90"
      },
      {
        "OptionName": "Over $100",
        "value": "o100"
      },
      {
        "OptionName": "$1 to $5",
        "value": "1to5"
      },
      {
        "OptionName": "$1 to $10",
        "value": "1to10"
      },
      {
        "OptionName": "$1 to $20",
        "value": "1to20"
      },
      {
        "OptionName": "$5 to $10",
        "value": "5to10"
      },
      {
        "OptionName": "$5 to $20",
        "value": "5to20"
      },
      {
        "OptionName": "$5 to $50",
        "value": "5to50"
      },
      {
        "OptionName": "$10 to $20",
        "value": "10to20"
      },
      {
        "OptionName": "$10 to $50",
        "value": "10to50"
      },
      {
        "OptionName": "$20 to $50",
        "value": "20to50"
      },
      {
        "OptionName": "$50 to $100",
        "value": "50to100"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Target Price",
    "id": "fs_targetprice",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "50% Above Price",
        "value": "a50"
      },
      {
        "OptionName": "40% Above Price",
        "value": "a40"
      },
      {
        "OptionName": "30% Above Price",
        "value": "a30"
      },
      {
        "OptionName": "20% Above Price",
        "value": "a20"
      },
      {
        "OptionName": "10% Above Price",
        "value": "a10"
      },
      {
        "OptionName": "5% Above Price",
        "value": "a5"
      },
      {
        "OptionName": "Above Price",
        "value": "above"
      },
      {
        "OptionName": "Below Price",
        "value": "below"
      },
      {
        "OptionName": "5% Below Price",
        "value": "b5"
      },
      {
        "OptionName": "10% Below Price",
        "value": "b10"
      },
      {
        "OptionName": "20% Below Price",
        "value": "b20"
      },
      {
        "OptionName": "30% Below Price",
        "value": "b30"
      },
      {
        "OptionName": "40% Below Price",
        "value": "b40"
      },
      {
        "OptionName": "50% Below Price",
        "value": "b50"
      }
    ]
  },
  {
    "name": "IPO Date",
    "id": "fs_ipodate",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Today",
        "value": "today"
      },
      {
        "OptionName": "Yesterday",
        "value": "yesterday"
      },
      {
        "OptionName": "In the last week",
        "value": "prevweek"
      },
      {
        "OptionName": "In the last month",
        "value": "prevmonth"
      },
      {
        "OptionName": "In the last quarter",
        "value": "prevquarter"
      },
      {
        "OptionName": "In the last year",
        "value": "prevyear"
      },
      {
        "OptionName": "In the last 2 years",
        "value": "prev2yrs"
      },
      {
        "OptionName": "In the last 3 years",
        "value": "prev3yrs"
      },
      {
        "OptionName": "In the last 5 years",
        "value": "prev5yrs"
      },
      {
        "OptionName": "More than a year ago",
        "value": "more1"
      },
      {
        "OptionName": "More than 5 years ago",
        "value": "more5"
      },
      {
        "OptionName": "More than 10 years ago",
        "value": "more10"
      },
      {
        "OptionName": "More than 15 years ago",
        "value": "more15"
      },
      {
        "OptionName": "More than 20 years ago",
        "value": "more20"
      },
      {
        "OptionName": "More than 25 years ago",
        "value": "more25"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "modal"
      }
    ]
  },
  {
    "name": "Shares Outstanding",
    "id": "fs_sh_outstanding",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under 1M",
        "value": "u1"
      },
      {
        "OptionName": "Under 5M",
        "value": "u5"
      },
      {
        "OptionName": "Under 10M",
        "value": "u10"
      },
      {
        "OptionName": "Under 20M",
        "value": "u20"
      },
      {
        "OptionName": "Under 50M",
        "value": "u50"
      },
      {
        "OptionName": "Under 100M",
        "value": "u100"
      },
      {
        "OptionName": "Over 1M",
        "value": "o1"
      },
      {
        "OptionName": "Over 2M",
        "value": "o2"
      },
      {
        "OptionName": "Over 5M",
        "value": "o5"
      },
      {
        "OptionName": "Over 10M",
        "value": "o10"
      },
      {
        "OptionName": "Over 20M",
        "value": "o20"
      },
      {
        "OptionName": "Over 50M",
        "value": "o50"
      },
      {
        "OptionName": "Over 100M",
        "value": "o100"
      },
      {
        "OptionName": "Over 200M",
        "value": "o200"
      },
      {
        "OptionName": "Over 500M",
        "value": "o500"
      },
      {
        "OptionName": "Over 1000M",
        "value": "o1000"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "Float",
    "id": "fs_sh_float",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Under 1M",
        "value": "u1"
      },
      {
        "OptionName": "Under 5M",
        "value": "u5"
      },
      {
        "OptionName": "Under 10M",
        "value": "u10"
      },
      {
        "OptionName": "Under 20M",
        "value": "u20"
      },
      {
        "OptionName": "Under 50M",
        "value": "u50"
      },
      {
        "OptionName": "Under 100M",
        "value": "u100"
      },
      {
        "OptionName": "Over 1M",
        "value": "o1"
      },
      {
        "OptionName": "Over 2M",
        "value": "o2"
      },
      {
        "OptionName": "Over 5M",
        "value": "o5"
      },
      {
        "OptionName": "Over 10M",
        "value": "o10"
      },
      {
        "OptionName": "Over 20M",
        "value": "o20"
      },
      {
        "OptionName": "Over 50M",
        "value": "o50"
      },
      {
        "OptionName": "Over 100M",
        "value": "o100"
      },
      {
        "OptionName": "Over 200M",
        "value": "o200"
      },
      {
        "OptionName": "Over 500M",
        "value": "o500"
      },
      {
        "OptionName": "Over 1000M",
        "value": "o1000"
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "After-Hours Close",
    "id": "fs_ah_close",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "range"
      }
    ]
  },
  {
    "name": "After-Hours Change",
    "id": "fs_ah_change",
    "options": [
      {
        "OptionName": "Any",
        "value": ""
      },
      {
        "OptionName": "Custom (Elite only)",
        "value": "frange"
      }
    ]
  }
];
export default keys;