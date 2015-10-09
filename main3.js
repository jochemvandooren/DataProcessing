/* use this to test out your function */
var data = [['Afghanistan', 'af', '2014', '31280518'], ['Albania', 'ALB', '2014', '2894475'], ['Algeria', 'DZA', '2014', '39928947'], ['American Samoa', 'ASM', '2014', '55320'], ['Andorra', 'AND', '2014', '80153'], ['Angola', 'AGO', '2014', '22137261'], ['Antigua and Barbuda', 'ATG', '2014', '90903'], ['Argentina', 'ARG', '2014', '41803125'], ['Armenia', 'ARM', '2014', '2983990'], ['Aruba', 'ABW', '2014', '103431'], ['Australia', 'AUS', '2014', '23490736'], ['Austria', 'AUT', '2014', '8534492'], ['Azerbaijan', 'AZE', '2014', '9537823'], ['Bahrain', 'BHR', '2014', '1344111'], ['Bangladesh', 'BD', '2014', '158512570'], ['Barbados', 'BRB', '2014', '286066'], ['Belarus', 'BLR', '2014', '9470000'], ['Belgium', 'BEL', '2014', '11225207'], ['Belize', 'BLZ', '2014', '339758'], ['Benin', 'BEN', '2014', '10599510'], ['Bermuda', 'BMU', '2014', '65181'], ['Bhutan', 'BTN', '2014', '765552'], ['Bolivia', 'BOL2', '2014', '10847664'], ['Bolivia', 'BOL', '2014', '10847664'], ['Bosnia and Herzegovina', 'BIH', '2014', '3824746'], ['Botswana', 'BWA', '2014', '2038587'], ['Brazil', 'BRA', '2014', '202033670'], ['Brunei Darussalam', 'BRN', '2014', '423205'], ['Bulgaria', 'BGR', '2014', '7226291'], ['Burkina Faso', 'BFA', '2014', '17419615'], ['Burundi', 'BDI', '2014', '10482752'], ['Cabo Verde', 'CPV', '2014', '503637'], ['Cambodia', 'KHM', '2014', '15408270'], ['Cameroon', 'CMR', '2014', '22818632'], ['Canada', 'CAN', '2014', '35540419'], ['Cayman Islands', 'CYM', '2014', '59226'], ['Central African Republic', 'CAF', '2014', '4709203'], ['Chad', 'TCD', '2014', '13211146'], ['Channel Islands', 'CHI', '2014', '162778'], ['Chile', 'CHL', '2014', '17772871'], ['China', 'CHN', '2014', '1364270000'], ['China (taiwan)', 'TAI', '2014', '1364270000'], ['Colombia', 'COL', '2014', '48929706'], ['Comoros', 'COM', '2014', '752438'], ['Costa Rica', 'CRI', '2014', '4937755'], ["Cote d'Ivoire", 'CIV', '2014', '20804774'], ['Croatia', 'HRV', '2014', '4236400'], ['Cuba', 'CUB', '2014', '11258597'], ['Curacao', 'CUW', '2014', '155872'], ['Cyprus', 'CYP', '2014', '1153058'], ['Czech Republic', 'CZE', '2014', '10510566'], ['Denmark', 'DNK', '2014', '5639565'], ['Djibouti', 'DJI', '2014', '886313'], ['Dominica', 'DMA', '2014', '72341'], ['Dominican Republic', 'DOM', '2014', '10528954'], ['Ecuador', 'ECU', '2014', '15982551'], ['El Salvador', 'SLV', '2014', '6383752'], ['Equatorial Guinea', 'GNQ', '2014', '778061'], ['Eritrea', 'ERI', '2014', '6536176'], ['Estonia', 'EST', '2014', '1313645'], ['Ethiopia', 'ETH', '2014', '96506031'], ['Faeroe Islands', 'FRO', '2014', '49460'], ['Fiji', 'FJI', '2014', '887027'], ['Finland', 'FIN', '2014', '5463596'], ['France', 'FRA', '2014', '66201365'], ['French Polynesia', 'PYF', '2014', '279835'], ['Gabon', 'GAB', '2014', '1711294'], ['Georgia', 'GEO', '2014', '4504100'], ['Germany', 'DEU', '2014', '80889505'], ['Ghana', 'GHA', '2014', '26442178'], ['Greece', 'GRC', '2014', '10957740'], ['Greenland', 'GRL', '2014', '56295'], ['Grenada', 'GRD', '2014', '106303'], ['Guam', 'GUM', '2014', '167546'], ['Guatemala', 'GTM', '2014', '15859714'], ['Guinea', 'GIN', '2014', '12043898'], ['Guinea-Bissau', 'GNB', '2014', '1745798'], ['Guyana', 'GUY', '2014', '803677'], ['Haiti', 'HTI', '2014', '10461409'], ['Honduras', 'HND', '2014', '8260749'], ['Hungary', 'HUN', '2014', '9861673'], ['Iceland', 'ISL', '2014', '327589'], ['India', 'IND', '2014', '1267401849'], ['Indonesia', 'IDN', '2014', '252812245'], ['Iraq', 'IRQ', '2014', '34278364'], ['Ireland', 'IRL', '2014', '4612719'], ['Isle of Man', 'IMN', '2014', '86475'], ['Israel', 'ISR', '2014', '8215300'], ['Italy', 'it', '2014', '61336387'], ['Jamaica', 'JAM', '2014', '2721252'], ['Japan', 'JPN', '2014', '127131800'], ['Jordan', 'JOR', '2014', '6607000'], ['Kazakhstan', 'KAZ', '2014', '17289111'], ['Kenya', 'KEN', '2014', '45545980'], ['Kiribati', 'KIR', '2014', '103942'], ['Kosovo', '', '2014', '1823149'], ['Kuwait', 'KWT', '2014', '3479371'], ['Kyrgyz Republic', 'KGZ', '2014', '5834200'], ['Lao PDR', 'LAO', '2014', '6894098'], ['Latvia', 'LVA', '2014', '1990351'], ['Lebanon', 'LBN', '2014', '4510301'], ['Lesotho', 'LSO', '2014', '2097511'], ['Liberia', 'LBR', '2014', '4396873'], ['Libya', 'LBY', '2014', '6253452'], ['Liechtenstein', 'LIE', '2014', '37194'], ['Lithuania', 'LTU', '2014', '2929323'], ['Luxembourg', 'LUX', '2014', '556074'], ['Madagascar', 'MDG', '2014', '23571962'], ['Malawi', 'MWI', '2014', '16829144'], ['Malaysia', 'MYS', '2014', '30187896'], ['Maldives', 'MDV', '2014', '351572'], ['Mali', 'MLI', '2014', '15768227'], ['Malta', 'MLT', '2014', '427404'], ['Marshall Islands', 'MHL', '2014', '52772'], ['Mauritania', 'MRT', '2014', '3984457'], ['Mauritius', 'MUS', '2014', '1260934'], ['Mexico', 'MEX', '2014', '123799215'], ['Moldova', 'MDA', '2014', '3556400'], ['Monaco', 'MCO', '2014', '38066'], ['Mongolia', 'MNG', '2014', '2881415'], ['Montenegro', 'MNE', '2014', '621800'], ['Morocco', 'MAR', '2014', '33492909'], ['Morocco', 'MAR2', '2014', '33492909'], ['Mozambique', 'MOZ', '2014', '26472977'], ['Myanmar', 'MMR', '2014', '53718958'], ['Namibia', 'NAM', '2014', '2347988'], ['Nepal', 'NPL', '2014', '28120740'], ['Netherlands', 'NLD', '2014', '16854183'], ['New Caledonia', 'NCL', '2014', '266000'], ['New Zealand', 'NZL', '2014', '4509700'], ['Nicaragua', 'NIC', '2014', '6169269'], ['Niger', 'NER', '2014', '18534802'], ['Nigeria', 'NGA', '2014', '178516904'], ['Northern Mariana Islands', 'MNP', '2014', '54531'], ['Norway', 'NOR', '2014', '5136475'], ['Oman', 'OMN', '2014', '3926492'], ['Pakistan', 'PAK', '2014', '185132926'], ['Palau', 'PLW', '2014', '21097'], ['Panama', 'PAN', '2014', '3926017'], ['Papua New Guinea', 'PNG', '2014', '7476108'], ['Paraguay', 'PRY', '2014', '6917579'], ['Peru', 'PER', '2014', '30769077'], ['Philippines', 'PHL', '2014', '100096496'], ['Poland', 'POL', '2014', '37995529'], ['Portugal', 'PRT', '2014', '10397393'], ['Puerto Rico', 'PRI', '2014', '3548397'], ['Qatar', 'QAT', '2014', '2267916'], ['Romania', 'ROU', '2014', '19910995'], ['Russian Federation', 'RUS', '2014', '143819569'], ['Rwanda', 'RWA', '2014', '12100049'], ['Samoa', 'WSM', '2014', '191831'], ['San Marino', 'SMR', '2014', '31637'], ['Sao Tome and Principe', 'STP', '2014', '197882'], ['Saudi Arabia', 'SAU', '2014', '29369428'], ['Egypt (republic of saudi)', 'EG', '2014', '29369428'], ['Yemen (republic of saudi)', 'YE', '2014', '29369428'], ['Senegal', 'SEN', '2014', '14548171'], ['Serbia', 'SRB', '2014', '7129428'], ['Seychelles', 'SYC', '2014', '91526'], ['Sierra Leone', 'SLE', '2014', '6205382'], ['Singapore', 'SGP', '2014', '5469700'], ['Sint Maarten (Dutch part)', 'SXM', '2014', '37664'], ['Slovak Republic', 'SVK', '2014', '5418506'], ['Slovenia', 'SVN', '2014', '2062218'], ['Solomon Islands', 'SLB', '2014', '572865'], ['Somalia', 'SOM', '2014', '10805651'], ['South Africa', 'ZAF', '2014', '54001953'], ['South Sudan', 'SSD', '2014', '11738718'], ['Spain', 'ESP', '2014', '46404602'], ['Sri Lanka', 'LKA', '2014', '20639000'], ['St. Kitts and Nevis', 'KNA', '2014', '54789'], ['St. Lucia', 'LCA', '2014', '183598'], ['St. Martin (French part)', 'MAF', '2014', '31530'], ['St. Vincent and the Grenadines', 'VCT', '2014', '109371'], ['Sudan', 'SDN', '2014', '38764090'], ['Suriname', 'SUR', '2014', '543925'], ['Swaziland', 'SWZ', '2014', '1267704'], ['Sweden', 'SWE', '2014', '9689555'], ['Switzerland', 'CHE', '2014', '8190229'], ['Syrian Arab Republic', 'SYR', '2014', '23300738'], ['Tajikistan', 'TJK', '2014', '8408947'], ['Tanzania', 'TZA', '2014', '50757459'], ['Thailand', 'THA', '2014', '67222972'], ['Timor-Leste', 'TLS', '2014', '1212107'], ['Togo', 'TGO', '2014', '6993244'], ['Tonga', 'TON', '2014', '105782'], ['Trinidad and Tobago', 'TTO', '2014', '1344235'], ['Tunisia', 'TUN', '2014', '10996600'], ['Turkey', 'TUR', '2014', '75837020'], ['Turkmenistan', 'TKM', '2014', '5307171'], ['Turks and Caicos Islands', 'TCA', '2014', '33736'], ['Tuvalu', 'TUV', '2014', '9894'], ['Uganda', 'UGA', '2014', '38844624'], ['Ukraine', 'UKR', '2014', '45362900'], ['United Arab Emirates', 'ARE', '2014', '9445624'], ['United Kingdom', 'GBR', '2014', '64510376'], ['United States', 'USA', '2014', '318857056'], ['Uruguay', 'URY', '2014', '3418694'], ['Uzbekistan', 'UZB', '2014', '30742500'], ['Vanuatu', 'VUT', '2014', '258301'], ['Vietnam', 'VNM', '2014', '90730000'], ['Virgin Islands (U.S.)', 'VIR', '2014', '104170'], ['West Bank and Gaza', 'PSE', '2014', '4294682'], ['Zambia', 'ZMB', '2014', '15021002'], ['Zimbabwe', 'ZWE', '2014', '14599325']]
var colours = ["#5C8533", "#477519", "#336600", "#2E5C00", "#295200"];
window.onload = function() {
	
	
for (var i in data){
	number = parseInt(data[i][3]);
	console.log(number);
	if (number < 10000000){
	changeColor(data[i][1], colours[0]);
	}
	else if (number < 50000000){
	changeColor(data[i][1], colours[1]);
	}
	else if (number < 100000000){
	changeColor(data[i][1], colours[2]);
	}
	else if (number < 200000000){
	changeColor(data[i][1], colours[3]);
	}
	else {
	changeColor(data[i][1], colours[4]);
	}
	
}	
}

/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	if (document.getElementById(id) !== null){
		document.getElementById(id).style.fill = color;
		console.log(document.getElementById(id));
	}

        
        
}








