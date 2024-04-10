<script>
    export let name;
    export let selectedOption;
    export let handleClick;
</script>

<div
    class="option"
    on:click={() => handleClick(name)}
    class:selected={selectedOption === name}
>
    <div
        class="line bg-secondaryText"
        style="width: {selectedOption === name ? '68px' : '40px'};"
    ></div>
    <div class="text text-secondaryText">{name}</div>
</div>

<style>
    .option {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-top: 14px;
    }
    .line {
        height: 1px;
        transition: width 0.3s ease;
        margin-right: 14px;
    }
    .option.selected .line {
        background-color: white;
    }
    .option.selected .text {
        color: white;
    }
    .option:hover .line {
        background-color: white;
    }
    .option:hover .text {
        color: white;
    }
</style>
