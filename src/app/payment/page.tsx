"use client";

import * as React from "react";
import {Shield } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Payment() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-6 md:grid-cols-[1fr, 736px] lg:grid-cols-2 ">
      <div className="space-y-8">
        {/* Billing Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="sm:w-[327px]">
                <h2 className="text-xl font-bold mb-1">Billing Info</h2>
                <p className="text-sm text-muted-foreground">
                  Please enter your billing info
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Step 1 of 4</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Town / City</Label>
                <Input id="city" placeholder="Town or city" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rental Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Rental Info</h2>
                <p className="text-sm text-muted-foreground">
                  Please select your rental date
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Step 2 of 4</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <span className="font-semibold">Pick - Up</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Locations</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">Hyderabad</SelectItem>
                      <SelectItem value="la">Karachi</SelectItem>
                      <SelectItem value="ch">Dadu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">12/dec/2025</SelectItem>
                      <SelectItem value="tomorrow">13/dec/2025</SelectItem>
                      <SelectItem value="next">14/dec/2025</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <span className="font-semibold">Drop - Off</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Locations</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">Nawabshah</SelectItem>
                      <SelectItem value="la">Hyderabad</SelectItem>
                      <SelectItem value="ch">Larkana</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">12/dec/2025</SelectItem>
                      <SelectItem value="tomorrow">13/dec/2025</SelectItem>
                      <SelectItem value="next">17/dec/25</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Payment Method</h2>
                <p className="text-sm text-muted-foreground">
                  Please enter your payment method
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Step 3 of 4</span>
            </div>
            <RadioGroup defaultValue="card" className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit Card</Label>
                  </div>
                  <div>
                    <Image
                      src="/visaa.png"
                      alt="Visa"
                      width={80}
                      height={55}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Card Number</Label>
                    <Input placeholder="Card number" />
                  </div>
                  <div className="space-y-2">
                    <Label>Expiration Date</Label>
                    <Input placeholder="MM / YY" />
                  </div>
                  <div className="space-y-2">
                    <Label>Card Holder</Label>
                    <Input placeholder="Card holder" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVC</Label>
                    <Input placeholder="CVC" />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex gap-10 lg:gap-[300px]">
                  PayPal
                  <Image src="/Paypal.png" alt="Paypal" width={100} height={100} />
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <RadioGroupItem value="bitcoin" id="bitcoin" />
                <Label htmlFor="bitcoin" className="flex gap-10 lg:gap-[300px]">
                  Bitcoin
                  <Image src="/Bitcoin.png" alt="" width={100} height={100}/>
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Confirmation */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-bold mb-1">Confirmation</h2>
                <p className="text-sm text-muted-foreground">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </p>
              </div>
              <span className="text-sm text-muted-foreground">Step 4 of 4</span>
            </div>
            <div className="space-y-4">
              <label className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promised!
                </span>
              </label>
              <label className="flex items-center space-x-2 p-4 bg-muted rounded-lg">
                <input type="checkbox" className="form-checkbox" />
                <span>
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <Shield className="w-8 h-8" />
              <div>
                <h3 className="font-semibold mb-1">All your data are safe</h3>
                <p className="text-sm text-muted-foreground">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
            <Link href={"/admin"}>
              <Button size="lg" className="mt-6 bg-[#3563E9]">
                Rent Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Rental Summary */}
      <div className="md:sticky md:top-4 space-y-4">
        <Card>
          <CardContent className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-1">Rental Summary</h2>
              <p className="text-sm text-muted-foreground">
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </p>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="w-32 h-24 bg-blue-600 rounded-lg relative overflow-hidden">
                <Image
                  src="/paycar.png"
                  alt="Nissan GT-R"
                  fill
                  className="object-contain "
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Nissan GT - R</h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 fill-primary"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-muted-foreground">
                    440+ Reviewer
                  </span>
                </div>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">$80.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-semibold">$0</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-muted rounded-lg flex items-center justify-between">
              <span className="text-muted-foreground">Apply promo code</span>
              <Link href={"/admin"}>
                <Button variant="link" className="font-semibold">
                  Apply now
                </Button>
              </Link>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Total Rental Price</h3>
                  <p className="text-sm text-muted-foreground">
                    Overall price and includes rental discount
                  </p>
                </div>
                <span className="text-2xl font-bold">$80.00</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
