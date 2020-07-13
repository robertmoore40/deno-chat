export default async function chat(ws) {

}


// @ts-nocheck
import { isWebSocketCloseEvent } from "https://deno.land/std@0.58.0/ws/mod.ts";
import { v4 } from "https://deno.land/std@0.58.0/uuid/mod.ts";

/**
 * userId: {
 *    userId: string,
 *    name: string,
 *    groupName: string,
 *    ws: WebSocket
 * }
 */

 
const usersMap = new Map();

/**
 * groupName: [user1, user2]
 * 
 * {
 *    userId: string,
 *    name: string,
 *    groupName: string,
 *    ws: WebSocket
 * }
 */

const groupsMap = new Map();

/**
 * groupName: [message1,message2]
 * 
 * {
 *    userId: string,
 *    name: string,
 *    message: string
 * }
 * 
 */