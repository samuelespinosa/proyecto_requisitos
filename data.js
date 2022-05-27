info={
    clases:{
        info_bakup:{
            nombre:"backup",
            hojas:[
                {nombre:"file", valores:[]}
            ],
            hojas_cl:[]
        },
        info_version:{
            nombre:"version",
            hojas:[
                {nombre:"date", valores:[]},
                {nombre:"time", valores:[]}
            ],
            hojas_cl:["bakup"]
        },
        info_definition:{
            nombre:"definition",
            hojas:[
                {nombre:"data dictionary table", valores:[]},
                {nombre:"integrity checker", valores:[]},
                {nombre:"storage partition", valores:[]},
                {nombre:"busines object", valores:[]},
                {nombre:"user defined objec", valores:[]},
                {nombre:"configuration levels object", valores:[]},
                {nombre:"database realationships", valores:[]},
                {nombre:"busines object atribute", valores:[]},
                {nombre:"cell data type", valores:[]},
                {nombre:"database view", valores:[]},
                {nombre:"index ", valores:[]},
                {nombre:"prymary key", valores:[]},
                {nombre:"status", valores:[]},
            ],
            hojas_cl:[]
        },
        info_database:{
            nombre:"database",
            hojas:[
                {nombre:"performance",valores:[]},
                {nombre:"security",valores:[]}
            ],
            hojas_cl:["documentation","version","managment_s","data","user"]
        },
        info_documentation:{
            nombre:"documentation",
            hojas:[{nombre:"File",valores:[]}],
            hojas_cl:[]
        },
        info_managment_s:{
            nombre:"Managment system",
            hojas:[],
            hojas_cl:[]
        },
        info_structure:{
            nombre:"Structure",
            hojas:[],
            hojas_cl:["definition"]
        },
        info_r_database:{
            nombre:"Relational Database",
            hojas:[],
            hojas_cl:["table","structure"]
        },
        info_table:{
            nombre:"Table",
            hojas:[
                {nombre:"Foreing key", valores:[]},
                {nombre:"Primary key", valores:[]}
            ],
            hojas_cl:["row","column"]
        },
        info_row:{
            nombre:"Row",
            hojas:[],
            hojas_cl:["cell"]
        },
        info_column:{
            nombre:"Column",
            hojas:[],
            hojas_cl:["cell"]
        },
        info_cell:{
            nombre:"Cell",
            hojas:[
                {nombre:"Value",valores:[]}
            ],
            hojas_cl:[]
        },
        info_vcs:{
            nombre:"Version control sistem",
            hojas:[
                {nombre:"file", valores:[]}
            ],
            hojas_cl:[]
        },
        info_data:{
            nombre:"Data",
            hojas:[
                {nombre:"Standar", valores:[]},
                {nombre:"Retriability", valores:[]},
                {nombre:"Quality", valores:[]},
                {nombre:"Integrity", valores:[]}
            ],
            hojas_cl:[]
        },
        info_user:{
            nombre:"User",
            hojas:[
                {nombre:"Nombre", valores:[]},
                {nombre:"Email", valores:[]},
            ],
            hojas_cl:["acount"]
        },
        info_acount:{
            nombre:"Acount",
            hojas:[
                {nombre:"Username", valores:[]},
                {nombre:"Password", valores:[]},
                {nombre:"Status", valores:[]},
            ],
            hojas_cl:["access"]

        },
        info_access:{
            nombre:"Access",
            hojas:[{nombre:"Privilege", valores:[]},],
            hojas_cl:[]
        },
        info_software_s:{
            nombre:"Software system",
            hojas:[
            ],
            hojas_cl:["interface"]
        },
        info_interface:{
            nombre:"Interface",
            hojas:[
                {nombre:"Output", valores:[]},
                {nombre:"Input", valores:[]},
            ],
            hojas_cl:[]
        },
        info_end_user:{
            nombre:"End user",
            hojas:[],
            hojas_cl:[] 
        },
        info_dba:{
            nombre:"Database Administrator",
            hojas:[],
            hojas_cl:[] 
        },
        info_dev_team:{
            nombre:"Development Team",
            hojas:[],
            hojas_cl:[] 
        },
        info_nr_database:{
            nombre:"No relational database",
            hojas:[],
            hojas_cl:[] 
        },
        info_programer:{
            nombre:"Programer",
            hojas:[],
            hojas_cl:[] 
        },

    },
    eventos:{
        user_arises:{
            probabilidad: 50,
            last_try:false        
        },
        request_r_database: {
            probabilidad:50,
            last_try:false      
        }
    },

    dinamicas:{
        desings:false,
        aproves:false,

        creates:{value:false},
        develops:{value:false},
        controls:{value:false},
        updates:{value:false},
        deletes:{value:false},
        enters:{value:false},
        consults:{value:false},
        updates2:{value:false},
        grants:{value:false},
        removes:{value:false}
    }
};

localStorage.setItem('rawData', JSON.stringify(info));