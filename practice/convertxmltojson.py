import xml.etree.ElementTree as ET
import xmltodict
import json

tree = ET.parse('xmlfile.xml')
xml_data = tree.getroot()
xmlstr = ET.tostring(xml_data, encoding='utf-8', method='xml')
data_dict = dict(xmltodict.parse(xmlstr))
with open("jsonfile.json", "w") as outfile: 
    json.dump(data_dict, outfile,indent=4)