import React from "react";
import { maps, price, ownerIcon } from "../assets";

function FundCard({
  owner,
  city,
  postCode,
  streetAddress,
  description,
  pricePerHour,
  isAvailable,
  image,
  handleClick,
}) {
  return (
    <div
      className="sm:w-[288px] w-full rounded-[10px] bg-white cursor-pointer shadow-md"
      onClick={handleClick}
    >
      <img
        src={image}
        alt="image"
        className="w-full h-[157px] object-cover rounded-t-[10px]"
      />
      <div className="flex flex-col p-4">
        <div className="flex flex-row  items-center mb-[18px]">
          <img
            src={maps}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <div className="flex flex-row justify-between">
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#505051]">
              {city}
            </p>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#505051]">
              {streetAddress}
            </p>
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#505051]">
              {postCode}
            </p>
          </div>
        </div>
        <div className="block mb-[18px]">
          <p className="font-epilogue font-semibold truncate text-[#343434] text-[16px]">
            {description}
          </p>
        </div>
        <div className="flex flex-row  items-center mb-[18px] justify-between">
          <div className="flex flex-row  items-center">
            <img
              src={price}
              alt="tag"
              className="w-[17px] h-[17px] object-contain"
            />
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#505051]">
              {pricePerHour} ETH /h
            </p>
          </div>
          <div className="flex flex-row  items-center">
            <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#505051] pr-3">
              Available:
            </p>
            <div
              className={
                isAvailable
                  ? "w-[15px] h-[15px] rounded-full bg-green-500"
                  : "w-[15px] h-[15px] rounded-full bg-red-500"
              }
            ></div>
          </div>
        </div>
        <div className="flex items-center mt-[18px] gap-[3px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center">
            <img
              src={ownerIcon}
              alt="owner"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by <span className="text-[#b2b3bd]">{owner}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FundCard;
