//general fuctions
var clear_m=function(){
    let form =document.getElementById('insert_js_form');
    let table=document.getElementById('instert_js');
    div.children[0].innerHTML="";
    form.innerHTML="";
    if(typeof table.getElementsByTagName("tbody")[0] !=='undefined'){
        table.removeChild(table.getElementsByTagName("tbody")[0]);
    }
};

var preconditions=function(arr){
    arr.forEach(e =>{
        if(!e){return false}
    });
    return true;
};
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

//modal title
var title=document.getElementById('infoLabel');
//modalsimple text
let div =document.getElementById('instert_plainText');
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
                    title.innerHTML=cl.info.nombre;
                //llenar filas  `
                fill_table (table,cl);
            }
            modal.show();
        });
    });
})();

let info_e = JSON.parse(localStorage.getItem('rawData')).eventos;
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
    
    //user arises
    const user_arises=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-209 path');
    user_arises.addEventListener('dblclick',function(e){
        let prob =Math.floor(Math.random() * 100) + 1;
        //llenar modal
        if(check_event(info_e.user_arises,prob)){
            div.children[0].innerHTML="Ha entrado un nuevo usuario ( probabilidad de "+info_e.user_arises.probabilidad+"% )";
        }else{
            div.children[0].innerHTML="No ha entrado un nuevo usuario ( probabilidad de "+(100-info_e.user_arises.probabilidad)+"% )";
        }
        //titulo modal
        title.innerHTML="User arises";

        modal.show();
        
    });
    //Interested
    const request_r_database=document.querySelector('#cell-SSNSlAbiQOSAJhHqBq8c-104 path'); 
    request_r_database.addEventListener('dblclick',function(e){
        let prob =Math.floor(Math.random() * 100) + 1;
        //llenar modal
        if(check_event(info_e.request_r_database,prob)){
            div.children[0].innerHTML="Se requiere una base de datos relacional ( probabilidad de :"+info_e.request_r_database.probabilidad+"% )";
        }else{
            div.children[0].innerHTML="No se requiere una base de datos relacional ( probabilidad: "+(100-info_e.request_r_database.probabilidad)+"% )";
        }
        //titulo modal
        title.innerHTML="Interested request database";

        modal.show();
        
    });

})();



// Dinamicas 
let info_d = JSON.parse(localStorage.getItem('rawData')).dinamicas;
//desings

(function(){
    let desings=document.getElementById('cell-SSNSlAbiQOSAJhHqBq8c-121');
    let form =document.getElementById('insert_js_form');
    desings.addEventListener('dblclick', (e)=>{
        let fields=[];
        if (info_e.request_r_database.last_try){
            let hojas=info.info_definition.hojas;
            for (let i = 0; i < hojas.length-1; i++) {
                let dvv=document.createElement('div');
                let lab=document.createElement('label');
                let ar=document.createElement('textarea');
                ar.setAttribute('id',"definition"+i)
                ar.setAttribute('class','form-control');
                ar.setAttribute('required','')
                lab.setAttribute('for',"definition"+i);
                lab.innerHTML=hojas[i].nombre;
    
                fields.push({index:i,f:ar});
                dvv.appendChild(lab);  
                dvv.appendChild(ar)
                form.appendChild(dvv);
            }
            let btn=document.createElement('button');
            btn.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
            btn.innerHTML="Guardar datos";
            let full=true;
            btn.addEventListener('click',(e)=>{   
                for(let i=0;i<fields.length;i++){
                    if(fields[i].f.value===''){
                        full=false;
                        break;
                    }
                }  
                if(full){
                    fields.forEach(element => {
                        info.info_definition.hojas[element.index].valores.push(element.f.value);
                    });
                    info_d.desings=true;
                }else{
                    alert("Campos faltantes no se guardó");
                    info_d.desings=false;
                }
                clear_m();
                modal.hide();
            });
            form.appendChild(btn);
        }else{
            div.children[0].innerHTML="Ningun cliente ha solicitado una base de datos relacional";
            info_d.desings=false;
        }
        //Titulo modal
        title.innerHTML="Designs";
        modal.show();
        
    });
})();

//aproves

var aprove = (function (){
    
    let form =document.getElementById('insert_js_form');
    let aproves=document.getElementById('cell-tE6iZ3CQhYsDijoS7ZWy-17');
    let handler=function(){
        if(info_d.desings){
            div.children[0].innerHTML+="<div><h5>última instanscia de structure definition</h5></div>";
            info.info_definition.hojas.forEach(h=> {
                div.children[0].innerHTML+="<div> <b>"+h.nombre+":</b><p>"+h.valores[0] +"</p></div>";
            });
            let btn1=document.createElement('button');
            btn1.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
            btn1.innerHTML="Aprove";
            let btn2=document.createElement('button');
            btn2.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
            btn2.innerHTML="Reject";
            form.appendChild(btn1);
            form.appendChild(btn2);
            let arr=info.info_definition.hojas;
            btn1.addEventListener('click',(e)=>{
                info_d.aproves=true;
                info_d.desings=false;   
                let temp=arr[arr.length-1].valores
                temp.push("Yes");
                info.info_dba.hojas[0].valores=["Leadership","Productivity","Team work","Resilence","Ability to recive and give feedback", "Resolution of problems and confilts"];
                info.info_dba.hojas[1].valores=["Telecomunicatios","Public safety and security","coumunications and media"];
                clear_m();
                modal.hide();
            });
            btn2.addEventListener('click',(e)=>{
                info_d.aproves=false;
                let temp=arr[arr.length-1].valores;
                temp.push("No");
                clear_m();
                modal.hide();
            });
            
        }else{
            div.children[0].innerHTML="Implicación necesaria no satísfecha";
            info_d.aproves=false;
        }
        //Titulo modal
        title.innerHTML="Aproves";
        modal.show();
    };
    var start= function(){
        aproves.addEventListener('dblclick',handler);   
    };
    return {start,handler};
})();
aprove.start();
//develops
var develops = (function(){
    let dvl=document.getElementById('cell-SSNSlAbiQOSAJhHqBq8c-14');
    var handler=function(){
        if(info_d.aproves){
            let form =document.getElementById('insert_js_form');
            let code=document.createElement('textarea');
            let file=document.createElement('textarea');
            let lab1=document.createElement('label');
            let lab2=document.createElement('label');
            code.setAttribute('class','form-control');
            code.setAttribute('id','code');
            file.setAttribute('class','form-control');
            file.setAttribute('id','file');
            lab1.setAttribute('for','code');
            lab1.innerHTML="Code";
            lab2.setAttribute('for','file');
            lab2.innerHTML="Documentation";
            let div1=document.createElement('div');
            div1.appendChild(lab1);
            div1.appendChild(code);
            let div2=document.createElement('div');
            div2.appendChild(lab2);
            div2.appendChild(file);
            form.appendChild(div1);
            form.appendChild(div2);
            let btn=document.createElement('button');
            btn.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
            btn.innerHTML="Guardar datos";
            btn.addEventListener('click',(e)=>{
                if(file.value !=='' && code.value !==''){
                    info_d.develops.value=true;
                    info_d.aproves=false;
                    info.info_documentation.hojas[0].valores.push(file.value);
                    info.info_database.hojas[0].valores.push("Average");
                    info.info_database.hojas[1].valores.push("Average");
                    info.info_data.hojas[0].valores.push("consistent , use (purpose)");
                    info.info_data.hojas[1].valores.push("High");
                    info.info_data.hojas[2].valores.push("Aceptable");
                    info.info_data.hojas[3].valores.push("Yes");
                    info.info_table.hojas[0].valores.push("Some foreing key");
                    info.info_table.hojas[1].valores.push("Some priamry key");
                    info.info_cell.hojas[0].valores.push("Some value added while coding");

                }else{
                    info_d.develops.value=false;
                    alert("Campos faltantes");
                }
                modal.hide();
                clear_m();
            });
            form.appendChild(btn);
        }else{
            div.children[0].innerHTML="Implicación necesaria no satísfecha";
            info_d.develops.value=false;
        }
        //Titulo modal
        title.innerHTML="Develops";
        modal.show();
    };
    function start(){
        dvl.addEventListener('dblclick',handler);
    }
    return {handler, start};
})();
develops.start();
function create_form(id,nomb,cond,pos_cond,callback){
    let dvl=document.getElementById(id);
    dvl.addEventListener('dblclick',(e)=>{
        if(cond.value || cond.last_try){
            callback();
            info_d[pos_cond].value=true;
        }else{
            div.children[0].innerHTML="Implicación necesaria no satísfecha";
            info_d[pos_cond].value=false;
        }
        modal.show();
        //Titulo modal
        title.innerHTML=nomb;
    });
    
}
//controls
var form =document.getElementById('insert_js_form'); 
var call_controls=function(){
    let fecha=document.createElement('input');
    fecha.setAttribute('type','date');
    fecha.classList.add("w-100");

    let btn=document.createElement('button');
    btn.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
    btn.innerHTML="Guardar datos";
    btn.addEventListener('click',(e)=>{
        if(fecha.value !==''){
            info_d["controls"]=true;
            let d=new Date();
            info.info_version.hojas[0].valores.push(fecha.value);
            info.info_version.hojas[1].valores.push(d.getHours()+":"+d.getMinutes());
            info.info_bakup.hojas[0].valores.push("file.txt");
            info.info_dba.hojas[1].valores.push("Administration and managment");
        }else{
            info_d["controls"]=false;
            alert("Campos faltantes");
        }
     
        modal.hide();
        clear_m();
    });
    form.appendChild(fecha);
    form.appendChild(btn);
};
create_form("cell-VxLT8-vYYtwZTgKGblnZ-12","Controls",info_d.develops,"controls",call_controls);

var g_btn=function(callback,data){
    let btn=document.createElement('button');
    btn.classList.add("btn","btn-primary","w-100","mt-2","pt-10");
    btn.innerHTML="Guardar datos";
    let datos=data;
    console.log(datos);
    btn.addEventListener('click',(e)=>{
        callback(datos);
    });
    return btn;
};

var input_form=function(label,id){
    let div=document.createElement('div');
    let lab=document.createElement('label');
    let inp=document.createElement('input');
    inp.setAttribute('id',id);
    inp.setAttribute('type','text');
    inp.setAttribute('class','form-control');
    lab.setAttribute('for',id);
    lab.innerHTML=label;
    div.appendChild(lab); 
    div.appendChild(inp);
    form.appendChild(div);
    return inp;
};
var txt_form=function(label,id){
    let div=document.createElement('div');
    let lab=document.createElement('label');
    let inp=document.createElement('textarea');
    inp.setAttribute('id',id);
    inp.setAttribute('type','text');
    inp.setAttribute('class','form-control');
    lab.setAttribute('for',id);
    lab.innerHTML=label;
    div.appendChild(lab); 
    div.appendChild(inp);
    form.appendChild(div);
    return inp;
};
var select_form=function(label,id,options){
    let div=document.createElement('div');
    let lab=document.createElement('label');
    let inp=document.createElement('select');
    options.forEach(e=>{
        let opt=document.createElement('option');
        opt.setAttribute('value',e);
        opt.innerHTML=e;
        inp.appendChild(opt);
    }); 
    inp.firstChild.setAttribute('selected','true');
    inp.setAttribute('id',id);
    inp.setAttribute('type','text');
    inp.setAttribute('class','form-control');
    lab.setAttribute('for',id);
    lab.innerHTML=label;
    div.appendChild(lab); 
    div.appendChild(inp);
    form.appendChild(div);
    return inp;
};
//creates
var call_creates=function(){
    let user=input_form("Nombre:","user");
    let email=input_form("Email:","email");
    let username=input_form("Username:","username333");
    let password=input_form("Password:","password");
    let call_btn=function(data){
        console.log(data);
        let bl=true;
        data.forEach(e=> {if(e.value===""){
            clear_m();
            modal.hide();
            bl=false;
        }});
        if(bl){
            info.info_user.hojas[0].valores.push(data[0].value);
            info.info_user.hojas[1].valores.push(data[1].value);
            info.info_acount.hojas[0].valores.push(data[2].value);
            info.info_acount.hojas[1].valores.push(data[3].value);
        }else{
            alert("Campos Faltantes");
        }
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[user,email,username,password]);
    form.appendChild(btn);
};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-202","Creates",info_e.user_arises,"creates",call_creates);
//updates
var call_updates=function(){
    let username=input_form("Username:","username555");
    let user=input_form("Change nombre:","user");
    let email=input_form("Change email:","email");
    let c_username=input_form("Change username:","c_username");
    let c_password=input_form("Change password:","password");
    let call_btn=function(data){
        
        let ck=info.info_acount.hojas[0].valores.find((e)=>e===data[0].value); 
        if(ck){
            let index=info.info_acount.hojas[0].valores.indexOf(username.value);
            if(data[1].value!==''){
                info.info_acount.hojas[0].valores[index]=data[1].value;
            }
            if(data[2].value!==''){
                info.info_acount.hojas[1].valores[index]=data[2].value;
            }
            if(data[3].value!==''){
                info.info_user.hojas[0].valores[index]=data[3].value;
            }
            if(data[4].value!==''){
                info.info_user.hojas[1].valores[index]=data[4].value;
            }
        }else{
            alert("Username no encontrado");
        }

        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[username,c_username,c_password,user,email]);
    form.appendChild(btn)

};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-206","Updates",info_d.creates,"updates",call_updates);
//deletes
var call_deletes=function(){
    let username=input_form("Username:","username1324");
    let call_btn=function(data){
        let ck=info.info_acount.hojas[0].valores.find((e)=>e===data[0].value); 
        if(ck){
            let index=info.info_acount.hojas[0].valores.indexOf(username.value);
            info.info_acount.hojas[0].valores[index]=""; 
            info.info_acount.hojas[1].valores[index]="";
            info.info_user.hojas[0].valores[index]=""; 
            info.info_user.hojas[1].valores[index]="";
           
        }else{
            alert("Username no encontrado");
        }
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[username]);
    form.appendChild(btn)
};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-207","Deletes",info_d.creates,"deletes",call_deletes);
//enters
var call_enters=function(){
    let username=input_form("Username:","username1324");
    let password=input_form("Password:","password");
    let call_btn=function(data){    
        let ck=info.info_acount.hojas[0].valores.find((e)=>e===data[0].value);
        if(ck){
            let index=info.info_acount.hojas[0].valores.indexOf(username.value);
            if(data[1].value===info.info_acount.hojas[1].valores[index]){
                info.info_acount.hojas[2].valores[index]="Logged in"; 
            }else{
                info.info_acount.hojas[2].valores[index]="Logged out"; 
            }
        }else{
            alert("Username no encontrado");
        }
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[username,password]);
    form.appendChild(btn)
};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-219","Enters",info_d.creates,"enters",call_enters);
//consults
var call_consults=function(){
    let cons=txt_form("Query:","txt");
    let call_btn=function(data){
        info.info_interface.hojas[0].valores.push("Some output");
        info.info_interface.hojas[1].valores.push(data.value);
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,cons);
    form.appendChild(btn)

};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-155","Consults",info_d.enters,"consults",call_consults);
//updates
var call_updates2=function(){
    let cons=txt_form("Query:","txt2");
    let call_btn=function(data){
        info.info_interface.hojas[0].valores.push("Some output");
        info.info_cell.hojas[0].valores.push("Some value provided by a query");
        info.info_interface.hojas[1].valores.push(data.value);
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,cons);
    form.appendChild(btn)
};
create_form("cell-SSNSlAbiQOSAJhHqBq8c-154","Updates",info_d.enters,"updates2",call_updates2);
//grants
var call_grants=function(){
    let username=select_form("Username:","username11",info.info_user.hojas[0].valores);
    let privs=select_form("privilege:","privs",["conect","resource","dba"]);
    let call_btn=function(data){
        let index=info.info_acount.hojas[0].valores.indexOf(data[0].value);
        info.info_access.hojas[0].valores[index]=data[1].value;
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[username,privs]);
    form.appendChild(btn)
};  
create_form("cell-SSNSlAbiQOSAJhHqBq8c-45","Grants",info_d.creates,"grants",call_grants);
//removes
var call_removes=function(){
    let username=select_form("Username:","userasdame11",info.info_user.hojas[0].valores);
    let call_btn=function(data){
        let index=info.info_acount.hojas[0].valores.indexOf(data[0].value);
        info.info_access.hojas[0].valores[index]="conect";
        clear_m();
        modal.hide();
    };
    let btn=g_btn(call_btn,[username]);
    form.appendChild(btn)
};
create_form("cell-qPyNxZiLLxJMrfGkT2nn-69","Removes",info_d.grants,"removes",call_removes);


//limpiar modal
let close_btn=document.getElementById('close_btn');
close_btn.addEventListener('click',(e)=>clear_m());


