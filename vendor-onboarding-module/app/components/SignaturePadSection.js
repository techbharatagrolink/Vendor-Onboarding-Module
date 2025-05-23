"use client";

import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { BsFingerprint } from "react-icons/bs";
import { useFormContext } from "@/app/context/FormContext";
import Image from "next/image";

const SignaturePadSection = () => {
  const sigCanvasRef = useRef(null);
  const [isEditable, setIsEditable] = useState(true);
  const { formData, updateFormData } = useFormContext();

  const clearSignature = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
      updateFormData("signature", "");
    }
  };

  const saveSignature = () => {
    if (sigCanvasRef.current?.isEmpty()) {
      alert("Please provide a signature first.");
      return;
    }

    // const trimmedCanvas = sigCanvasRef.current.getTrimmedCanvas();
    // const dataURL = trimmedCanvas.toDataURL("image/png");
    // updateFormData("signature", dataURL);
    alert("Signature saved to context!");
  };

  return (
    <div className="max-w-md space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2">
        <BsFingerprint className="text-gray-600 w-5 h-5" />
        <span className="font-medium text-gray-700">Your Signature</span>
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <button
          className="text-green-600 text-sm hover:underline ml-auto"
          onClick={() => setIsEditable((prev) => !prev)}
        >
          {isEditable ? "Lock" : "Edit"}
        </button>
      </div>

      {/* Signature Canvas */}
      <div className="relative border border-gray-400 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-gray-400 text-sm rotate-[-20deg] opacity-50">
            For Bharat Agrolink Use
          </span>
        </div>

        <SignatureCanvas
          ref={sigCanvasRef}
          penColor="black"
          canvasProps={{
            width: 300,
            height: 100,
            className: `bg-white ${
              isEditable ? "cursor-crosshair" : "pointer-events-none"
            }`,
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {isEditable && (
          <button
            className="text-red-500 text-sm hover:underline"
            onClick={clearSignature}
          >
            Clear
          </button>
        )}
        <button
          className="text-blue-600 text-sm hover:underline"
          onClick={saveSignature}
        >
          Save
        </button>
      </div>

      {/* Preview */}
      {formData.signature && (
        <div className="pt-4">
          <h4 className="text-sm font-medium mb-1">Preview:</h4>
          <Image
            src={formData.signature}
            alt="Saved signature"
            className="border w-full max-w-xs"
            width={500}
                  height={500}
          />
        </div>
      )}
    </div>
  );
};

export default SignaturePadSection;
