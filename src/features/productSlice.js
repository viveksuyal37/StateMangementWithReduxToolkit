import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle", //idle,loading,success
};

export const fetchProducts = createAsyncThunk("/fetchProducts", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  } catch (err) {
    return err.message;
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.filterState = state.products[0].filter((product) => {
        return product.title
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
    sort: (state, action) => {
      //ideally this should be done with the help of api using qwery params but i hv done here since products are less.
      let filterList = state.filterState || state.products[0];

      if (action.payload === "Name") {
        state.filterState = [...filterList].sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (action.payload === "Price") {
        state.filterState = [...filterList].sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
      state.status = "success";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products.push({ products: [] });
      state.status = "error";
    });
  },
});

export const { searchProduct, sort } = productsSlice.actions;

export const getAllProducts = (state) => {
  return state.products;
};

export default productsSlice.reducer;
