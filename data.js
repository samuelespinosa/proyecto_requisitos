info={
    clases:{
        info_bakup:{
            nombre:"backup",
            hojas:[
                {nombre:"file", valores:["file1.txt","file2.txt"]}
            ]
        },
        info_version:{
            nombre:"version",
            hojas:[
                {nombre:"date", valores:["mayo 9", "mayo 10"]},
                {nombre:"time", valores:["10:00 pm", "11:00 pm"]}
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
            ]
        }
    },
    eventos:{
        user_arises:{
            probabilidad: 30,
            last_try:false        
        },
        request_r_database: {
            probabilidad:50,
            last_try:false      
        }
    }
};

localStorage.setItem('rawData', JSON.stringify(info));