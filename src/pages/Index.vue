<template>
  <Layout>
    <Header />
    <Products />
    <Constructor />
    <Workflow class="xs:hidden" />
    <SoftCore />
    <DataSharing />
    <Integration class="md:mt-40 xl:mt-40" />
    <ComputerVision/>
    <div class="bg-blue">
      <Areas class="md:mt-40 xl:mt-40"/>
      <UsingAdvantages />
    </div>
  </Layout>
</template>

<script>
import Header from "@/components/index/header/Header";
import Products from "@/components/index/products/Products";
import Constructor from "@/components/index/constructor/Constructor";
import Workflow from "@/components/index/workflow/Workflow";
import SoftCore from "@/components/index/softcore/SoftCore";
import DataSharing from "@/components/index/datasharing/DataSharing";
import Integration from "@/components/index/integration/Integration";
import ComputerVision from "@/components/index/computerVision/ComputerVision";
import Areas from "@/components/index/areas/Areas";
import UsingAdvantages from "@/components/index/advantages/UsingAdvantages";

export default {
  components: {
    Header,
    Products,
    Constructor,
    Workflow,
    SoftCore,
    Integration,
    DataSharing,
    ComputerVision,
    Areas,
    UsingAdvantages,
  },
};
</script>

<style>
</style>
