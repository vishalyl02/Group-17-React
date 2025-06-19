/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode *dt=head;

        int count=0;
        while(dt!=NULL)
        {
            dt=dt->next;
            count++;
        }
        int mid=0;
        if(count%2==0)
        {
            mid=count/2+1;
        }
        else
        {
            mid=count/2+1;
        }
        int cnt=0;
        while(head!=NULL)
        {
            cnt++;
            if(mid==cnt)
            {
                return head;
            }
            head=head->next;
        }
        return NULL;
    }
};