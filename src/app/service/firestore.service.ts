import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {}

  // Obter dados de uma coleção
  getCollectionData(collectionName: string): Observable<any[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' });
  }

  // Adicionar um documento a uma coleção
  addDocument(collectionName: string, data: any): Promise<any> {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data);
  }
}
