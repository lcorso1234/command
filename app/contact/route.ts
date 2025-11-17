"use server";

import { promises as fs } from "fs";
import path from "path";

const VCARD_FILENAME = "ISP Technology.vcf";
const VCARD_PATH = path.join(process.cwd(), "contact.vcf");

export async function GET() {
  try {
    const fileContents = await fs.readFile(VCARD_PATH);

    return new Response(fileContents, {
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": `attachment; filename="${VCARD_FILENAME}"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Failed to load vCard:", error);
    return new Response("Unable to load contact card", { status: 500 });
  }
}
