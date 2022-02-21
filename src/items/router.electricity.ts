import express, { Request, Response } from "express";
import { ElectricityItem, BaseElectricityItem, ElectricityItems } from "./interface";
import * as ItemService from "../services/service.electricity";

export const itemsRouter = express.Router();

// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const items: ElectricityItem[] = await ItemService.findAll();
        res.status(200).send(items);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET items/:id
itemsRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const item: ElectricityItem = await ItemService.find(id);

        if (item) {
            return res.status(200).send(item);
        }

        res.status(404).send("item not found");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const item: BaseElectricityItem = req.body;
        const newItem = await ItemService.create(item);
        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// PUT items/:id
itemsRouter.put("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);

    try {
        const itemUpdate: ElectricityItem = req.body;

        const existingItem: ElectricityItem = await ItemService.find(id);

        if (existingItem) {
            const updatedItem = await ItemService.update(id, itemUpdate);
            return res.status(200).json(updatedItem);
        }

        const newItem = await ItemService.create(itemUpdate);

        res.status(201).json(newItem);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});


itemsRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id: number = parseInt(req.params.id, 10);
        await ItemService.remove(id);

        res.sendStatus(204);
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});