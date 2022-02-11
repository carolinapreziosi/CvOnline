// creo parrafos
let paragraph1 = document.createElement('p');
paragraph1.innerText = '¡Hola! Mi nombre es Carolina, soy Tec. Universitaria en Administración de empresas y futura desarrolladora Web Fullstack . Soy de Uruguay , pero resido en CABA-Argentina .' ;
const container1 = document.querySelector('.containerWhoIm');
container1.appendChild(paragraph1);


document.getElementById("paragraph2").style.display = "none"


let whoIAmButton = document.querySelector("#whoIAmButton");
let whoIAmButtonClosed = document.querySelector("#whoIAmButtonClosed");

whoIAmButtonClosed.style.display = "none";

//funcion + sobre mi
whoIAmButton.onclick = function (){

   const paragraph2 = document.querySelector("#paragraph2");
   paragraph2.style.display = "block";
   whoIAmButtonClosed.style.display = "inline-block";

    document.querySelector("#paragraph2").innerText = 'Me gusta estar en constante aprendizaje a través del estudio y experiencias. Asi fue como llegue al mundo de la tecnología, comenzando a estudiar de forma autodidacta , actualmente me encuentro formandome en la academia Educacion It para desarrollo fronted , para luego seguir por el  backend.'

    return false;

}

//funcion cerrar
whoIAmButtonClosed.onclick = function (){

   const paragraph2 = document.querySelector("#paragraph2");
   paragraph2.style.display = "none";
   whoIAmButtonClosed.style.display = "none";

   return false;
}


// saluda cuando clickeo la foto
let photoCv = document.getElementById('photoCv');
photoCv.onclick = toThank;

function toThank(){
  alert('gracias por visitar mi pagina!');
}

// register the grid component
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    data: function () {
      let sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
       let sortKey = this.sortKey
       let filterKey = this.filterKey && this.filterKey.toLowerCase()
       let order = this.sortOrders[sortKey] || 1
       let data = this.data
        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    filters: {
      capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      }
    }
  })
  
  // bootstrap 
  let demo = new Vue({
    el: '#demo',
    data: {
      searchQuery: '',
      gridColumns: ['CONOCIMIENTOS'],
      gridData: [
        { CONOCIMIENTOS: 'HTML5'},
        { CONOCIMIENTOS: 'CSS'},
        { CONOCIMIENTOS: 'JAVASCRIPT'},
        { CONOCIMIENTOS: 'Paquete Office'},
        { CONOCIMIENTOS: 'Facturación'},
        { CONOCIMIENTOS: 'Adminitrativos/contables'},
      ]
    }
  })

  

