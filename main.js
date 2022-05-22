
//claeses
const backup=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-30 path');
const version=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-92 path');
const documentation=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-88 path');
const vcs=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-175 path');
const cell=document.querySelector('#cell-5NEpah_waWefGBjNTfvU-18 path');
const column=document.querySelector('#cell-5NEpah_waWefGBjNTfvU-28 path');
const r_database=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-75 path');
const row=document.querySelector('#cell-5NEpah_waWefGBjNTfvU-27 path');
const table=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-98 path');
const structure=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-67 path');
const definition=document.querySelector('#cell-EZgtYLtoIed60wYvrFE1-6 path');
const database=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-19 path');
const software_s=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-52 path');
const managment_s=document.querySelector('#cell-AoyPW8-pLW3hW8I_rYMj-92 path');
const interface=document.querySelector('#cell-ygslKlo0knTWSYMOV6jX-43 path');
const acount=document.querySelector('#cell-qPyNxZiLLxJMrfGkT2nn-15 path');
const data=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-27 path');
const user=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-41 path');
const access=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-255 path');
const nr_database=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-76 path');
const end_user=document.querySelector('#cell-VxLT8-vYYtwZTgKGblnZ-6 path');
const programer=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-135 path');
const dev_team=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-112 path');
const dba=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-9 path');

//info clases
let info = JSON.parse(localStorage.getItem('rawData')).clases;

clases=[
    {backup,info:info["info_bakup"]}
    ,{version,info:info["info_version"]}
    ,{documentation,info:info["info_documentation"]}
    ,{vcs,info:info["info_vcs"]}
    ,{cell,info:info["info_cell"]}
    ,{column,info:info["info_column"]}
    ,{r_database,info:info["info_r_database"]}
    ,{row,info:info["info_row"]}
    ,{table,info:info["info_table"]}
    ,{structure,info:info["info_structure"]}
    ,{definition,info:info["info_definition"]}
    ,{database,info:info["info_database"]}
    ,{software_s,info:info["info_software_s"]}
    ,{managment_s,info:info["info_managment_s"]}
    ,{interface,info:info["info_interface"]}
    ,{acount,info:info["info_acount"]}
    ,{data,info:info["info_data"]}
    ,{user,info:info["info_user"]}
    ,{access,info:info["info_access"]}
    ,{nr_database,info:info["info_nr_database"]}
    ,{end_user,info:info["info_end_user"]}
    ,{programer,info:info["info_programer"]}
    ,{dev_team,info:info["info_dev_team"]}
    ,{dba,info:info["info_dba"]}
];

//Modal
const modal = new bootstrap.Modal('#info');

//fn clases
(function (){
    var insert_row=function(tbody,clase,hoja){
        let row = document.createElement('tr')
        let head=document.createElement("th");
        let headText = document.createTextNode(clase+"."+hoja.nombre);
        head.appendChild(headText);
        row.appendChild(head);
        hoja.valores.forEach( vl => {
            let cell=document.createElement("th");
            let cellText = document.createTextNode(vl);
            cell.appendChild(cellText);
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    }

    var fill_table=function(table,data){
        let tbody=document.createElement("tbody");
        let arr=[];
        data.info.hojas.forEach(h=> {
            insert_row(tbody,data.info.nombre,h);
        });
        arr.push(data.info.nombre);
        if ( typeof data.info.hojas_cl !== 'undefined'){
            data.info.hojas_cl.forEach(name=> {
                if (!arr.includes(name)){
                    let dt =info["info_"+name];
                    dt.hojas.forEach(h=> {
                        insert_row(tbody,name,h);
                    });
                    arr.push(name);
                }
            });
        }
        table.appendChild(tbody);  
    };
    clases.forEach( cl => {
        cl[Object.keys(cl)[0]].addEventListener('dblclick', function (e) {
            if(typeof cl.info !== 'undefined'){
                //llenar modal
                let table=document.getElementById('instert_js');
                //titulo modal
                let title=document.getElementById('infoLabel');
                title.innerHTML=cl.info.nombre;
                //llenar filas  `
                fill_table (table,cl);
            }
            modal.show();
        });
    });
})();

//eventos
(function(){
    var check_event = function(evento,intento){
        if(intento<=evento.probabilidad){
            evento.last_try=true;
            return true;
        }
        evento.last_try=false;
        return false;
    };
    let info_e = JSON.parse(localStorage.getItem('rawData')).eventos;
    //user arises
    const user_arises=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-209 path');
    user_arises.addEventListener('dblclick',function(e){
        let prob =Math.floor(Math.random() * 100) + 1;
        //llenar modal
        let div =document.getElementById('instert_js_events');
        if(check_event(info_e.user_arises,prob)){
            div.children[0].innerHTML="Ha entrado un nuevo usuario ";
        }else{
            div.children[0].innerHTML="No ha entrado un nuevo usuario ";
        }
        //titulo modal
        let title=document.getElementById('infoLabel');
        title.innerHTML="User arises: probabilidad de "+info_e.user_arises.probabilidad;

        modal.show();
        
    });
    const request_r_database=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-104 path'); 
    request_r_database.addEventListener('dblclick',function(e){
        let prob =Math.floor(Math.random() * 100) + 1;
        //llenar modal
        let div =document.getElementById('instert_js_events');
        if(check_event(info_e.request_r_database,prob)){
            div.children[0].innerHTML="Se requiere una base de datos relacional ( probabilidad de :"+info_e.request_r_database.probabilidad+" )";
        }else{
            div.children[0].innerHTML="No Se requiere una base de datos relacional";
        }
        //titulo modal
        let title=document.getElementById('infoLabel');
        title.innerHTML="User arises";

        modal.show();
        
    });

})();



// Dinamicas 

//cretes
let desings=document.getElementById('cell-SSNSlAbiQOSAJhHqBq8c-121');
let form =document.getElementById('insert_js_form');
let fields=[];
desings.addEventListener('dblclick', (e)=>{
    let hojas=info.info_definition.hojas;
    for (let i = 0; i < hojas.length; i++) {
        let lab=document.createElement('label');
        let ar=document.createElement('textarea');
        ar.setAttribute('id',"definition"+i)
        ar.setAttribute('class','form-control');

        fields.push({index:i,ar});   
        form.appendChild(ar);
    }
    //Titulo modal
    let title=document.getElementById('infoLabel');
    title.innerHTML="Definition of the database";
    modal.show();
});


//limpiar modal

(function(){
    let close_btn=document.getElementById('close_btn');
    close_btn.addEventListener('click', function(e){
        let div =document.getElementById('instert_js_events');
        let form =document.getElementById('insert_js_form');
        let table=document.getElementById('instert_js');
        div.children[0].innerHTML="";
        form.innerHTML="";
        if(typeof table.getElementsByTagName("tbody")[0] !=='undefined'){
            table.removeChild(table.getElementsByTagName("tbody")[0]);
        }
    })
})();

