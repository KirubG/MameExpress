"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const checkoutPage = () => {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  let totalPrice =
    items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0) / 100;

  if (totalPrice === 0 || items.length === 0) {
    return (
      <h2 className="w-full h-40 flex items-center justify-center">
        Your Cart is Epmty
      </h2>
    );
  }
  return (
    <div className="mx-72">
      <Table>
        <TableCaption>Order Summary</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product Image</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Price*Qty</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, key) => (
            <TableRow key={key}>
              <TableCell className="font-medium">
                <Image
                  src={item.imageUrl ?? "/placeholder.png"}
                  alt="image"
                  width={70}
                  height={10}
                />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{(item.price / 100).toFixed(2)}</TableCell>
              <TableCell>
                ${((item.price * item.quantity) / 100).toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                {" "}
                <div className="flex justify-end">
                  <Button
                    onClick={() => removeItem(item.id)}
                    className="flex items-center px-4"
                  >
                    -
                  </Button>
                  <h2 className="mx-6 font-bold text-2xl">{item.quantity}</h2>
                  <Button
                    onClick={() => addItem({ ...item, quantity: +1 })}
                    className=" flex items-center px-4"
                  >
                    +
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-left font-bold">
              ${totalPrice.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex">
        <Button
          onClick={() => clearCart()}
          className=" mt-8 flex justify-center"
        >
          Clear Cart
        </Button>
        <form className="mt-8" action="">
          <Button className="mx-40 px-10">Proceed to Payment</Button>
        </form>
      </div>
    </div>
  );
};

export default checkoutPage;
