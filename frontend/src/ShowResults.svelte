<script>
    export let birthDate;
    import { numberWithCommas } from "./utils";
    const usersBDate = new Date(birthDate).getTime();
    let billionthSecond = new Date(usersBDate + 1000000000 * 1000);
    $:currentSecond = ''
    setInterval(()=>{
        currentSecond = numberWithCommas(parseInt(((new Date(Date.now() - usersBDate).getTime())/1000)))
    },1000)

</script>

<section>
    <ul class="list-group mt-3">
        <li class="list-group-item">
            The day on which you live your billionth second is
            {billionthSecond.toString()}
        </li>
        <li class="list-group-item">
            You are on {currentSecond}th second right now(approx.)
        </li>
    </ul>
</section>

<style>
</style>
