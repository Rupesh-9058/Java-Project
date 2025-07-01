import React from 'react'

const Listte = () => {
  const ListteCard = [
    {
      id: 1,
      Topic: "List",
      informationSection: "List is the category which is used to store group of elements where the elements can be duplicated .",
      note: [
        "-> List is an interface whose object can not be created directly .",
        "-> To work with this category we have to use following implementations class of list interface. ",
        "-> Example : ArrayList , LiinkedList , Vector , Stack"
      ],
      about: [
        "-> It us the child interface of collection .",
        "-> If we want to represent a group of individual objects where duplicates are allowed and insertion order is preserved . Then we should go for List .",
        "-> We can differentiate duplicate Objects and we can maintain insertion order by means of index hence (index plays important role in list) ." 
      ],
      Methods: [
        "-> boolean add(int index,Object o);",
        "-> boolean addAll(int index, Collection c);",
        "-> Object get(int index);",
        "-> Object remove(int index)",
        "-> Object Set(int index,Object o)",
        "-> int indexOf(Object o)",
        "-> int lastIndexOf(object o)",
        "-> ListIterator listiterator()"
      ]

    },
    {
      id: 2,
      Topic: "ArrayLsit",
      note: [
        "-> ArrayList is an implementation class of Collection interface .",
        "-> ArrayList is resizable data structure (internally it will use Array to store data)",
        "-> Duplicate Objects are allowed .",
        "-> Insertion order is preserved .",
        "-> Heterogenous Objects are preserved .",
        "-> Null insertion is possible ."
      ],
      Constructor: [
        "1. ArrayList al = new ArrayList();",
        "-> It creates an empty ArrayList Object with default initial capacity 10 .",
        "-> If ArrayList reaches its maximum capacity then a new ArrayList Object will be created with (NewCapacity = (CurrentCapacity*3/2) + 1)",
        "2. ArrayList al = new ArrayList(initialCapacity);",
        "-> Creates an empty ArrayList Object with specified initial capacity .",
        "3. ArrayList al = new ArrayList(Collection c);",
        "-> creates an equivalent ArrayList Object for given Collection that is the constructor meant for inter conversation between Collection Objects .",
        "-> ArrayList and Vector classes implements Random interface so that if any random element we can access with the same speed .",
        "-> Random Access interface present in utill package and does not contain methods . It is a marker interface ."
      ],
      example: [
        "package in.Qspider;",
        "import java.util.ArrayList;",
        "Public class ArrayList {",
        "  public static void main(String[] args) { ",
        "          ArrayList al = new ArrayList();  ",
        '          al.add("ashok");',
        '          al.add(101);',
        '          al.add(202.25);',
        '          System.out.println(al);',
        '          al.remove(1);',
        '          System.out.println(al);',
        '          al.add("hyd);',
        '          al.add("java);',
        '          System.out.println(al);',
        "      } ",
        "}       "
      ]

    },
    {
      id: 3,
      Topic: "Linkedlist",
      note: [
        "-> Linkedlist is one of the implementation classes of Collection interface .",
        "-> The linkedlist data structure is double Linkedlist .",
        "-> If our frequent operation is insertion or deletion in the middle then Linkedlsit is the best choice .",
        "-> If our frequent operation is retrival then Linkedlist is not best option .",
        "-> Duplicate Objects are allowed .",
        "-> Insertion order is preserved .",
        "-> Heterogenous Objects are allowed .",
        "-> NULL insertion is possible .",
        "-> Implements Serializable and clonable interfaces but not RandomAccess .",
        "-> Usually we can use linkedlist to implement Stacks and Queues to provide support this requirement LinkedList class defines following 6 specific methods .,"
      ],
      
      Methods: [
        "void add First(Object o);",
        "void addLast(Object o);",
        "Object getFirst();",
        "Object getLast();",
        "Object removeFirst();",
        "Object removeLast();"
      ],
      constructors: [
        "1. LinkedList l = new  LinkedList() ;",
        "     it creates an empty LinkedList Object .",
        "2. LinkedList l = new LinkedList(Collection c);",
        "     To create an equivalent LinkedList Object for the given Collection ."

      ],
      example: [
        "package in.Qspider",
        "import java.util.LinkedList ;",
        "public class LinkedListDemo { ",
        "    public static void main(String[] args) {",
        "          LinkedList l1 = new LinkedList();",
        "          l1.add()"
      ]



    },

  ]
  return (
    <div>Listte</div>
  )
}

export default Listte