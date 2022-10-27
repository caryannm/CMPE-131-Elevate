package deque;

import java.util.ArrayList;
import java.util.Collections;
import java.util.NoSuchElementException;



public class Deque {
	
	/* 
	 * Nested inner class, that holds the Nodes of the Deque
	 */
	private static class Node {
		int data;
		Node next;
		Node prev;
		
		public Node(int i) {
			data = i;
			next = null;
			prev = null;
		}
	}
	
	
	private Node head; //front of the Deque
	private Node tail; //back of the Deque
	
	public Deque() {
		head = null;
		tail = null;
	}
	
	/*
	 * Returns true if the Deque is empty (contains no Nodes). Returns true otherwise.
	 */
	public boolean isEmpty() {
		return head==null&&tail==null;
	}
	
	/*
	 * Converts an Deque to an ArrayList. 
	 * This method is useful for testing.
	 */
	public ArrayList<Integer> toArrayList(){
		ArrayList<Integer> deq = new ArrayList<>();
		Node current = head;
		while(current!=null) {
			deq.add(current.data);
			current = current.next;
		}
		return deq;
	}
	
	/*
	 * Returns a String representation of the Deque.
	 * This method is useful for testing.
	 */
	public String toString() {
		String s = "";
		if(isEmpty())
			return s;
		Node current = head;
		while(current!=null) {
			s = s+current.data + ",";
			current = current.next;
		}
		return s.substring(0,s.length()-1);
	}
	
	/*This method inserts a new Node in the Deque with data equal to i that becomes the new head of the Deque.*/
	public void insertHead(int i) {
		Node toInsert = new Node(i);
		if(isEmpty()) {
			head = toInsert;
			tail = toInsert;
		}
		else {
			toInsert.next = head;
			head.prev = toInsert;
			head = toInsert; 
		}
	}
	
	/*This method inserts a new Node in the Deque with data equal to i that becomes the new tail of the Deque.*/
	public void insertTail(int i) {
		Node toInsert = new Node(i);
		if(isEmpty()) {
			head = toInsert;
			tail = toInsert;
		}
		else {
			toInsert.prev = tail;
			tail.next = toInsert;
			tail = toInsert; 
		}
	}

	public int removeHead() {
		int value;
		
		if (isEmpty()) throw new NoSuchElementException("LinkedList is Empty.");
		else if (head.equals(tail)) {
			value = head.data;
			head = null;
			tail = null;
		}
		else {
			value = head.data;
			head = head.next;
			head.prev = null;
		}
		return value;
	}
	
	public int removeTail() {
		int value;
		
		if (isEmpty()) throw new NoSuchElementException("LinkedList is Empty.");
		else if (head.equals(tail)) {
			value = tail.data;
			head = null;
			tail = null;
		}
		else {
			value = tail.data;
			tail = tail.prev;
			tail.next = null;
		}
		return value;
	}
	public int peekHead() {

		if (isEmpty()) throw new NoSuchElementException("LinkedList is Empty.");
		
		return head.data;
	}
	public int peekTail() {

		if (isEmpty()) throw new NoSuchElementException("LinkedList is Empty.");
		
		return tail.data;
	}
	public Deque sort() {
		ArrayList<Integer> que = this.toArrayList();
		Deque sortDeque = new Deque();
		int i = 0;
		
		Collections.sort(que);
		while(!que.isEmpty())
			sortDeque.insertTail(que.remove(i));
	
		return sortDeque;
	}

}
