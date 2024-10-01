<template>
    <div class="ag-theme-alpine" style="height: 400px; width: 600px;">
        <AgGridVue
            :rowData="rowData"
            :columnDefs="columnDefs"
            :defaultColDef="defaultColDef"
            style="width: 100%; height: 100%;"
        />
    </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue3";

export default {
    name: 'GridSample',
    components: {
        AgGridVue
    },
    data() {
        return {
            columnDefs: [
                { field: 'Item1' },
                { field: 'Item2' },
                { field: 'Item3' },
            ],
            rowData: [
                { Item1: 'Data11', Item2: 'Data12', Item3: 'Data13' },
                { Item1: 'Data21', Item2: 'Data22', Item3: 'Data23' },
                { Item1: 'Data31', Item2: 'Data32', Item3: 'Data33' },
            ],
            defaultColDef: {
                sortable: true,
                filter: true,
            }
        }
    },
    mounted() {
        console.log(this.rowData); // 데이터 확인
    }
}
</script>

<style>
@import "~ag-grid-community/styles/ag-grid.css";
@import '~ag-grid-community/styles/ag-theme-alpine.css';
</style>