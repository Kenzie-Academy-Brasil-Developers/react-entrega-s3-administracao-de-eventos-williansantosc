import { WeddingProvider } from "./wedding";
import { ProductsProvider } from "./products";
import { GraduationProvider } from "./graduation";
import { ConfraternizationProvider } from "./confraternization";

function Providers({ children }) {
  return (
    <ProductsProvider>
      <WeddingProvider>
        <GraduationProvider>
          <ConfraternizationProvider>{children}</ConfraternizationProvider>
        </GraduationProvider>
      </WeddingProvider>
    </ProductsProvider>
  );
}

export default Providers;
