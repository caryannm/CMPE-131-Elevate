package deque;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.NoSuchElementException;

import org.junit.BeforeClass;
import org.junit.Test;

public class DequeTest {
	
	static ArrayList<Integer> toCompareOne;
	static ArrayList<Integer> toCompareMany;
	static ArrayList<Integer> sorted;
	
	 @BeforeClass
	    public static void setup() {
		 toCompareOne = new ArrayList<>();
		 toCompareOne.add(1);
		 
		 toCompareMany = new ArrayList<>();
		 for(int i=0;i<10;i++) {
			 toCompareMany.add((int)(Math.random()*i));
		 }
		 
		 sorted=new ArrayList<>();
		 for(int i=0;i<5;i++) {
			 sorted.add(i);
		 }
		 
		 
	    }
	

	@Test
	public void oneElement() {
		Deque one = new Deque();
		one.insertHead(1);
		
		assertEquals(one.toArrayList(),toCompareOne);
	}
	@Test
	public void oneElementTail() {
		Deque one = new Deque();
		one.insertTail(1);
		
		assertEquals(one.toArrayList(),toCompareOne);
	}
	@Test
	public void ManyElementsTail() {
		Deque many = new Deque();
		for(int i:toCompareMany)
			many.insertTail(i);
		assertEquals(many.toArrayList(),toCompareMany);
	}
	
	@Test
	public void ManyElementsHead() {
		Deque many = new Deque();
		for(int i:toCompareMany)
			many.insertHead(i);
		Collections.sort(toCompareMany);
		assertEquals(many.sort().toArrayList(),toCompareMany);
	}
	
	@Test(expected = NoSuchElementException.class)
	public void removeHeadFromEmpty() {
		Deque empty = new Deque();
		empty.removeHead();
		
	}
	
	@Test(expected = NoSuchElementException.class)
	public void removeTailFromEmpty() {
		Deque empty = new Deque();
		empty.removeTail();
	}
	@Test(expected = NoSuchElementException.class)
	public void peekHeadFromEmpty() {
		Deque empty = new Deque();
		empty.peekHead();
		
	}
	
	@Test(expected = NoSuchElementException.class)
	public void peekTailFromEmpty() {
		Deque empty = new Deque();
		empty.peekTail();
	}
	@Test
	public void removeHeadOneEmpty() {
		Deque one = new Deque();
		one.insertHead(1);
		one.removeHead();
		
		assertEquals(one.isEmpty(),true);
		
	}
	@Test
	public void removeTailOneEmpty() {
		Deque one = new Deque();
		one.insertTail(1);
		one.removeTail();
		
		assertEquals(one.isEmpty(),true);
	}
	@Test 
	public void sorted() {
		Deque notSorted = new Deque();
		for(int i: sorted) {
			notSorted.insertHead(i);
		}
		Deque sortTest = notSorted.sort();
		assertEquals(sortTest.toArrayList(),sorted);
	}
	@Test
	public void oneElementSort() {
		Deque one = new Deque();
		one.insertHead(1);
		
		Deque sortTest = one.sort();
		assertEquals(sortTest.toArrayList(),toCompareOne);
	}
	@Test
	public void emptySort() {
		Deque empty = new Deque();
		
		Deque sortTest = empty.sort();
		assertEquals(sortTest.isEmpty(),true);
	}
}
