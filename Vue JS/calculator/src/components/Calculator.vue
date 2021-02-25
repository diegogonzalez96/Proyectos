<template>
  <div class="calculator">
    <span class="display">{{current || '0'}}</span>
    <span @click="clear" class="btn">C</span>
    <span @click="sign" class="btn">+/-</span>
    <span @click="percent" class="btn">%</span>
    <span @click="divide" class="btn operator">/</span>
    <span @click="append('7')" class="btn">7</span>
    <span @click="append('8')" class="btn">8</span>
    <span @click="append('9')" class="btn">9</span>
    <span @click="multiply" class="btn operator">x</span>
    <span @click="append('4')" class="btn">4</span>
    <span @click="append('5')" class="btn">5</span>
    <span @click="append('6')" class="btn">6</span>
    <span @click="subtraction" class="btn operator">-</span>
    <span @click="append('1')" class="btn">1</span>
    <span @click="append('2')" class="btn">2</span>
    <span @click="append('3')" class="btn">3</span>
    <span @click="add" class="btn operator">+</span>
    <span @click="append('0')" class="btn zero">0</span>
    <span @click="dot" class="btn">.</span>
    <span @click="equal" class="btn operator">=</span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      previous: null,
      current:'',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear(){
      this.current = '';
    },
    sign(){
      this.current = this.current.charAt(0) === '-' ? 
        this.current.slice(1) : `-${this.current}`;
    },
    percent(){
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false
      }
      this.current = this.current + number;
    },
    dot(){
      if(this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide(){
      this.operator = (a,b) => a/b;
      this.setPrevious();
    },
    multiply(){
      this.operator = (a,b) => a*b;
      this.setPrevious();
    },
    subtraction(){
      this.operator = (a,b) => a-b;
      this.setPrevious();
    },
    add(){
      this.operator = (a,b) => a+b;
      this.setPrevious();
    },
    // equal(){
    //   this.current = `${this.operator(
    //     parseFloat(this.current), 
    //     parseFloat(this.previus)
    //     )}`;
    //     this,this.previus = null;
    // }
    equal() {
      this.current = `${this.operator(
        parseFloat(this.previous), 
        parseFloat(this.current)
        )}`
        this.previous = null
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .calculator{
    margin: 0 auto;
    width: 400px;
    height: 600px;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: minmax(50px, auto);
  }
  .display{
    grid-column: 1/5;
    background:#333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zero{
    grid-column: 1/3 ;
  }

  .btn{
    background-color: #f2f2f2;
    border: 1px solid #999;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn:active {
   transform: scale(0.95);
  }

  .btn:hover {
  background: rgb(21, 2, 73);
  color: #fff !important;
  }
  .operator{
    background-color: orange;
    color: white;
  }

  .operator:active {
   transform: scale(0.95);
  }

  .operator:hover {
  background: rgb(21, 2, 73);
  color: #fff !important;
  }

</style>
