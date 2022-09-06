
<template>
    <div>
        <input v-model="cityName" @keyup.enter="$emit('passCityName',cityName)" autofocus type="text" placeholder="Enter city name">

    </div>
</template>

<script>
    export default {
        name:'CityNameComp',
        emits:['passCityName'],
        data(){
            return{
                cityName:''
            }
        }
    }
</script>

<style scoped>

    div{
        text-align: center;
    }
    input{
            border: 1px solid black;
            padding: 1rem 2rem;
            font-weight: 800;
            font-family: "Satoshi", sans-serif, "General Sans", sans-serif;
            font-size: 1.5rem;
            background-color: rgb(211, 207, 207);
            color:rgb(0, 0, 0);
            width: 100%;
        }

</style>