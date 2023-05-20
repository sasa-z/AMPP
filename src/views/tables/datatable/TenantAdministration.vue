<template>
  <v-row>
    <!-- kitchen sink -->
    <v-col cols="12">
      <app-card-code
        title="Kitchen Sink"
        :code="codeSnippets.datatableKitchenSink"
      >
        <demo-datatable-kitchen-sink></demo-datatable-kitchen-sink>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoDatatableKitchenSink from './demos/DemoDatatableKitchenSink.vue'

// code
import {
  datatableKitchenSink,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoDatatableKitchenSink,
  },
  setup() {
    return {
      codeSnippets: {
        datatableKitchenSink,
      },
    }
  },
}
</script>
