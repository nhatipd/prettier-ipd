class A {
    someProp: number;
    someProp2: string;
    
    private test(){ let c = 1;
    return 19}
}

interface B{
    id: number;    name: string;
}

class A extends B{
    property1: id;
id: number;
}
const meta =
    {
      name: "RtAgentTable",
      descriptionKey: "rtagenttable.description",
      displayNameKey: "rtagenttable.displayname",
      iconUrl: null,
      properties: [

        {
          name: "columns",
          displayNameKey: "table.properties.columns",
          type: ENUMS.ComponentMetaPropertyType.COLUMNDEFINITIONS
        },
        {
          name: "groupsToShowAsActive",
          displayNameKey: "rtagenttable.properties.groupsToShowAsActive",
          type: ENUMS.ComponentMetaPropertyType.NUMBERARRAY
        },
        {
          name: "groupsToShowAsActive",
          displayNameKey: "rtagenttable.properties.groupsToShowAsActive",
          type: ENUMS.ComponentMetaPropertyType.NUMBERARRAY
        }
    
      ]
    };