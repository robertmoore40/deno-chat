export default async function chat(ws) {}

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

function emitUserList(groupName) {
  const users = groupsMap.get(groupName) || [];

  for (const user of users) {
    const event = {
      event: "users",
      data: getDisplayUsers(groupName),
    };
    user.ws.send(JSON.stringify(event));
  }
}

function getDisplayUsers(groupName) {
    const users = groupsMap.get(groupName) || [];
    return users.map((u) => {
      return { userId: u.userId, name: u.name };
    });
  }