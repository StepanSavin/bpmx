<template>
  <Layout>
    <div class="bg-light">
      <Header />
      <FirstScheme />
      <SecondScheme />
      <ProductFeatures />
    </div>
  </Layout>
</template>

<script>
import Header from "@/components/productDetails/Header";
import FirstScheme from "@/components/productDetails/FirstScheme";
import SecondScheme from "@/components/productDetails/SecondScheme";
import ProductFeatures from "@/components/productDetails/ProductFeatures";

export default {
  name: "ProductDetails",
  components: { Header, FirstScheme, SecondScheme, ProductFeatures },
};
</script>