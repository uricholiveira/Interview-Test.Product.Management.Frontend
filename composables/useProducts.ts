import type {IProduct} from "~/interfaces/IProduct";

export function useProducts() {
  const config = useRuntimeConfig();
  console.log(config.backend)

  const getById = async (id: number) => {
    const { data: element } = await useFetch(`${config.backend.url}/Product`, {
      method: "GET"
    });

    return element;
  }

  return {
    getById
  }
}
